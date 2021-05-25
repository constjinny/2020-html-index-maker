window.onload = function () {
  const parameterRule = /(params.get)\(['"](.*?)['"]\)/g;
  const submitButton = document.getElementById("submitButton");

  // utill
  const checkingExcept = (depth, except) =>
    except.filter((target) => depth.includes(target));

  const splitFolder = (value) => {
    const splitValue = value.split(/,| /);
    const result = splitValue.filter((value) => !value.length <= 0);
    return result;
  };

  // 2-4. 데이터 정렬 및 불필요 파일 제거
  const createOutputData = (datas, filesData) => {
    if (datas.except.length) {
      const except = datas.except;
      const filteredFileList = filesData.filter((file) => {
        if (file.name !== ".DS_Store") {
          const result = checkingExcept(file.depth, except);
          return !result.length > 0;
        }
      });
      return filteredFileList.sort();
    } else {
      return filesData.sort();
    }
  };

  // 2. 파일 데이터 읽기
  async function readFileData(inputData) {
    const resultFilesData = [];
    // 2-1. 데이터 가공
    const newFileData = Object.values(inputData.files).map(async (file) => {
      if (file.type === "text/html") {
        const fileData = {
          name: file.name,
          type: file.type,
          url: [`${inputData.url}/${file.webkitRelativePath}`],
          depth: file.webkitRelativePath.split("/"),
        };

        // 2-3. parameter check
        const readParameterInFile = await new Promise((resolve) => {
          if (inputData.option === true) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const readedFile = event.target.result;
              const matchParameterInFile = Array.from(
                new Set(readedFile.match(parameterRule))
              );
              const checkParameter = matchParameterInFile.map((text) => {
                const filteredParameter = text.split(parameterRule);
                return filteredParameter[2];
              });
              const resultParameter = new Set(checkParameter);

              const newUrlList = [...resultParameter].map((parameter) => {
                const newUrl = `${fileData.url}?${parameter}`;
                return newUrl;
              });
              newUrlList.unshift(fileData.url);
              resolve({ ...fileData, url: newUrlList });
            };
            reader.readAsBinaryString(file, "UTF-8");
          } else {
            resolve(fileData);
          }
        });

        resultFilesData.push(readParameterInFile);
        return Promise.resolve(readParameterInFile);
      }
    });

    await Promise.all(newFileData);

    const result = createOutputData(inputData, resultFilesData);
    return result;
  }

  // 1. submit 버튼 클릭시 입력 값 체크
  submitButton.addEventListener("click", async () => {
    localStorage.clear();
    const parameterOption = document.getElementById("parameterOption").checked;
    const defaultUrl = document.getElementById("inputDefaultUrl").value;
    const exceptFolderOrFile =
      document.getElementById("exceptFolderOrFile").value;
    const targetFolder = document.getElementById("inputTargetFolder").files;

    const inputData = {
      option: parameterOption,
      url: defaultUrl,
      except: splitFolder(exceptFolderOrFile),
      files: targetFolder,
    };

    if (!inputData.url.length) {
      alert("경로를 확인해주세요.");
    } else if (!inputData.files.length) {
      alert("파일을 확인해주세요.");
    } else {
      try {
        // 3. 출력
        const resultFileList = await readFileData(inputData);
        localStorage.setItem("urlList", JSON.stringify(resultFileList));
        window.open("./src/pages/result.html");
      } catch (err) {
        alert("에러 발생. 다시 실행해주세요.");
        console.log("err", err);
      }
    }
  });
};
