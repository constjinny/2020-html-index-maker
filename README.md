# htmlIndexMaker

## URL

https://constjinny.github.io/2020-html-index-maker/

## 목적

1. 인덱스 툴을 통해 목록 생성에 소비되는 시간을 50% 이상 단축

- 단순 반복 작업의 시간을 단축함으로, 인덱스 생성 목적인 결과물 확인에 중점을 두고 시간을 활용 가능
- 더 필요한 부분에 집중도를 높여 작업이 가능함으로 결과물의 정확도와 품질의 향상을 가져옴

2. 자동화 된 작업으로 항상 같은 결과물을 보장

- html 파일만이 아닌 인덱스 리스트에 불필요한 파일은 초반 과정에서 자동으로 걸러지게됨
- prameter 포함 여부와 제외파일 등을 설정하면 입력한 조건에 따른 url이 템플릿에 맞춰 자동 추출됨

3. preview 기능을 제공하여, 불필요한 페이지 이동을 줄임

## 개발

### 구조

```
├─src
│  │
│  ├─assets
│  │      ├─css
│  │      ├─images
│  │      └─videos
│  │
│  ├─js
│  │  ├─index.js
│  │  └─result.js
│  │
│  └─pages
│       └─resultPage.html
│
├─ index.html
├─ README.md
│
└─ test
```

### 스킬

- ES6
- HTML/CSS

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
- 디테일한 정보는 수정해서 사용해주세요. (ex. depth의 명칭 등)

## 예시 영상

## 테스트 파일
