# 2020-indexMaker

## URL
https://constjinny.github.io/2020_indexMaker/

## 목적

1. html 파일를 확인 후 파라미터 체크, 제외 파일 여부를 필터링한 뒤 url data를 추출
2. 추출된 url을 리스트로 제작, url 프리뷰 기능 제공

## 개발

### 구조

### 스킬

- ES6
- HTML, CSS

## 사용 가이드

### STEP1

img1
| value | value |info|EX|`주의`|
| :-- | :-- |:--|:--|:--|
|분기 포함 여부 | check |파일 내의 선언된 파라미터를 추가해 리스트 제작|.../src/indexMaker/mainPage.html`?type1`||
||unCheck |파일 단위로 리스트 제작|.../src/indexMaker/`mainPage.html`||
|경로 `(필수입력)`|/test-2020 |상대경로|/test-2020/src/indexMaker/mainPage.html||
|| html://test.com/test-2020|절대경로|html://www.test.com/test-2020/src/indexMaker/mainPage.html||
|||||업로드하는 폴더가 전체가 아니라면 해당 폴더 전까지의 세부 경로를 입력해야한다. (ex./test-2020/src/main)|
|제외폴더/파일명 |mainFolder, index.html, adminFolder...|인덱스로 제작하고 싶지 않은/불필요한 폴더와 파일 명을 입력|||
| 업로드폴더`(필수입력)`| |인덱스로 제작할 폴더를 업로드||해당 툴은 .html 확장자만을 체크|

### STEP2

img2

- 인덱스 페이지에 입력데이터에서 추출된 url이 입력됩니다.
- 사용시 index.html 내의 notice 주석을 제거합니다. (미제거시 프리뷰 기능 실행되지 않음)
- 디테일한 정보는 수정해서 사용해주세요. (ex. depth의 명칭 등)

## 예시 영상

## 테스트 파일
