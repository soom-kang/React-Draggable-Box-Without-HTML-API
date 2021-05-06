# Simple Draggable Component

> 본 프로젝트는 React, TypeScript 를 통해 제작되었습니다.

---

## 프로젝트 소개

1. 본 프로젝트는 `React`, `TypeScript` 를 통해 구성했습니다.

2. 부모인 `Draggable`과 `BOX` 컴포넌트를 `<Draggable> <Box /> </Draggable>` 과 같이 선언하고, 3rd Party나 라이브러리를 사용하지 않고 구성하였습니다.

3. `HTML Drag & Drop API` 을 사용하지 않았습니다.

4. 드래그 가능한 일정한 영역을 선언하였습니다.

#### 화면 예시

![draggable](https://user-images.githubusercontent.com/4216651/117315407-a2042080-aec2-11eb-86fd-3e1f6f7f2f88.gif)

## 프로젝트 실행

### 설치

1. 폴더 안에서 `npm install` 로 설치합니다.

```console
$ npm install
```

### 실행 (로컬)

1. 폴더 안에서 `npm start` 로 실행합니다.

```console
// 실행
$ npm start

// 테스트
$ npm run test
```

## 프로젝트 모듈 구조

```js
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Box/
│   │   │   ├── index.tsx
│   │   │   └── index.test.tsx
│   │   └── Draggable/
│   │       ├── index.tsx
│   │       └── index.test.tsx
│   ├── App.css
│   ├── App.test.ts
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── craco.config.js
├── package.json
├── tsconfig.json
└── tsconfig.paths.json
```

## 설치 패키지

#### package.json

```json
"dependencies": {
  "@testing-library/jest-dom": "^5.11.4",
  "@testing-library/react": "^11.1.0",
  "@testing-library/user-event": "^12.1.10",
  "@types/jest": "^26.0.15",
  "@types/node": "^12.0.0",
  "@types/react": "^17.0.0",
  "@types/react-dom": "^17.0.0",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-scripts": "4.0.3",
  "typescript": "^4.1.2",
},
"devDependencies": {
  "@craco/craco": "^6.1.2",
  "craco-alias": "^2.2.0",
}
```

## 기타 참고 사항

> - 본 프로젝트는 크롬에서 테스트를 거쳤습니다.
