function loadUrlList() {
  const localUrlList = localStorage.getItem("urlList");
  const urlList = JSON.parse(localUrlList);
  const urlListView = document.getElementById("view");

  const detailUrl = (data) => {
    data.url.map((datail, index) => {
      const createHtml = document.createElement("tr");
      if (index === 0) {
        createHtml.innerHTML = `
          <td>${data.name ? data.name : ""}</td>
          <td>${data.depth[0] ? data.depth[0] : ""}</td>
          <td>${data.depth[1] ? data.depth[1] : ""}</td>
          <td>${data.depth[2] ? data.depth[2] : ""}</td>
          <td><a href=${datail} target="_blank" class="link_preview">${datail}</a></td>
          <td></td>
        `;
      } else {
        createHtml.innerHTML = `
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><a href=${datail} target="_blank" class="link_preview">${datail}</a></td>
          <td></td>
        `;
      }
      return urlListView.appendChild(createHtml);
    });
  };

  console.log("urlList", urlList);
  urlList.map((data) => {
    detailUrl(data);
  });
}
