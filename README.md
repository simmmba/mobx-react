# MobX

## 설치

```bash
$ yarn add mobx mobx-react
```

#### babel 설정에 필요한 plugin 설치

```bash
$ yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```

```bash
$ yarn eject
```

- 아래와 같이 수정

```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
```

#### mobx-react-devtools 개발도구 설치

- 어떤 값을 바꿨을 때 어떠한 컴포넌트들이 영향을 받고, 업데이트는 얼마나 걸리고, 어떠한 변화가 일어났는지에 대한 세부적인 정보를 볼 수 있게 해줌

```bash
$ yarn add mobx-react-devtools
```

<br />

## 개념

### decorate

- 해당 컴포넌트 요소에 MobX 개념을 각각 적용할 수 있도록 해주는 함수
  - 첫번째 파라미터 : 적용할 컴포넌트
  - 두번째 파라미터 : object 방식
    - key: MobX에 적용할 변수명 및 함수명
    - value: 적용할 mobx 개념



### observer

- observable로 선언한 state값(예시의 경우 number 값)이 변할 때, 컴포넌트 API인 forceUpdate()를 자동 호출해 변경된 값이 화면에 반영



### computed

- observable 값 변경에 의한 연산 처리



<br />

## MobX React component 최적화

1. 리스트를 렌더링 할 땐, 컴포넌트에 리스트 관련 데이터만 props 로 넣자
   - 리스트 컴포넌트에 리스트 관련 props 만 넣기
   - 렌더릴 될 대상은 최대한 분리해서 observer 적용시키기
2. 세부 참조(dereference, 역참조)는 최대한 늦게하기
   - 특정 객체 내부 값을 조회하는 것

3. 함수는 미리 바인딩, 파라미터는 내부에서 넣기
   - 컴포넌트에 함수를 전달해 줄 때에는 미리 바인딩
   - 바인딩 시킬 함수는 최대한 밖에서 선언

4. 바인딩 시킬 함수의 파라미터는 최대한 내부에서 적용
   - 파라미터가 유동적일 때는 파라미터를 넣는 작업을 컴포넌트 밖이 아니라 안에서 하는것이 좋음

<br /><br />



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
