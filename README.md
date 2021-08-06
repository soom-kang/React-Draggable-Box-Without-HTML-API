<h3 align="center"> 
  React Draggable Box without HTML Drag & Drop API
</h3>

<h4 align="center">
  <a href="">View Demo</a>
</h4>

---

## About The Project

1. The parent component `Draggable` and child component `BOX` were designed as `<Draggable> <Box /> </Draggable>`

2. Not using `HTML Drag & Drop API`. Configured without using any 3rd parties or libraries

3. Declare a certain draggable area for the draggable box.

### Built With

- React

- TypeScript

## Getting Started

### Prerequisites

Before you start, install `Yarn` package to global.

```sh
npm install --global yarn
```

### Installation

1.  Clone the repo

    ```sh
    git clone https://github.com/VannsKang/React-Draggable-Box-Without-HTML-API.git
    ```

2.  Install NPM packages

    ```sh
    yarn install
    ```

3.  Run the project

    ```sh
    yarn start
    ```

4.  Build the package

    ```sh
    yarn build
    ```

## Project Tree

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
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.test.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── craco.config.js
├── package.json
├── tsconfig.json
└── ...
```

## NPM Packages

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

## ETC

This project is obtimized & tested in `Chrome`.

---

<h3 align="center">
Developed by SOOM
</h3>

<h4 align="center">
<a href="https://soomlog.vercel.app/">Soomlog.vercel.app</a>
</h4>
