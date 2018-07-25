## Forkify

http://food2fork.com/의 API를 사용한 Recipes Project

### Getting Started

#### Installing

```bash
$ npm install
```

#### Running
```bash
$ npm run start
```

---

## Setting

NodeJS 설치

```terminal
$ npm init

$ npm install webpack --save-dev

$ npm install jquery --svae

$ npm install live-server --global
```

### webpack 설정

`webpack.config.js` 파일 생성 후 기본 설정을 한다.

이 후, `webpack-dev-server`를 설치한다.

```terminal
$ npm install webpack-dev-server --save-dev
```

설치가 완료되면, `package.json`에 "script"를 추가한다.

```
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  }
```

```terminal
$ npm run dev

$ npm run build

$ npm run start
```


### babel 설정

```terminal
npm install babel-core babel-preset-env babel-loader --save -dev
```

babel 설치 후 `webpack.config.js`에 babel module 설정을 추가 한다.

webpack module 설정이 끝났다면 `.baberc` 파일을 생성하여 babel 설정을 정의한다.


#### babel-polyfill

`babel-polyfill`은 ES6에 추가된 환경을 ES5에서 쓸 수 있도록 transpile 된다.

```terminal
$ npm install babel-polyfill --save
```

설치가 완료되면 `webpack.config.js`의 entry point에 설정을 추가 한다.

이번에는 이전에 사용한 모듈 패턴 대신 ES6 모듈을 사용하여 구현할 것입니다.

실제 모듈을 사용하는 것이 훨씬 쉽고 관심사가 더 많이 분리되기 때문입니다.

MVC 패턴을 구현하는 방법은 여러 가지가 있지만 다른 것들보다 복잡합니다. 

여기에서는 매우 간단한 방법으로 구현할 것입니다.

MVC용 Google을 사용하면 여러 가지 방법으로 코드화 된 코드를 찾을 수 있습니다.

하지만 어쨌든 이제 실제 앱의 맥락에서 MVC를 살펴 보겠습니다.

우리는 index.js라는 자체 파일을 가질 컨트롤러를 갖게 될 것입니다.

다시 한번 말하지만, 이것은 ES6 모듈 덕택에 가능할 것입니다. ES6 모듈 덕분에 앱의 여러 측면을 서로 다른 파일로 분리하여 Javascript 애플리케이션을 모듈화 할 수 있습니다.

이제 모델에 관해서는, 우리는 앱의 각기 다른 측면에 대해 하나의 모델을 가질 것이고, 뷰에 대해서도 마찬가지 일 것입니다.

다시 한 번, 앱의 각 부분에 대한 하나의 View 파일.

이 첫 번째 예제에서는 Search 기능을 사용합니다.

따라서 검색 모델에서는 Ajax를 호출하여 API에서 특정 검색어에 대한 레시피를 얻습니다.

반면에 뷰는 사용자 인터페이스에서 검색 쿼리 문자열을 얻는 곳이며 검색 결과를 인쇄하는 곳입니다.

Controller는이 두 모델을 결합하여 모델과 뷰가 실제로 통신 할 필요가 없도록합니다.

이렇게하면 전체 앱을 더 모듈화하고 유지 관리하기가 쉬워집니다. 코딩을 시작할 때 알 수 있습니다.

보시다시피, 모델은 데이터와 앱 로직에 항상 관심을 갖고 View는 사용자 인터페이스에서 데이터를 가져오고 표시합니다.

MVC가 우리 앱에서 어떻게 작동 할 것인가는 간단합니다.

물론 동일한 로직이 앱의 Recipe, List 및 Likes 부분에 적용되므로 전체 컨트롤러가 항상 하나의 모델과 하나의보기를 유지합니다.

이제 여러 개의 컨트롤러를 사용할 수도 있지만 하나의 글로벌 컨트롤러로 작업하는 것이 더 쉽습니다.