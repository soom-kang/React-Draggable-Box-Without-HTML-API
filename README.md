<h3 align="center"> 
  React Draggable Box without HTML Drag & Drop API
</h3>

<h4 align="center">
  <a href="https://react-draggable-box-without-html-api.vercel.app/">View Demo</a>
</h4>

---

<img src="https://user-images.githubusercontent.com/4216651/129349860-bac674f6-ba10-46d5-ad52-7fe88d7d4cf4.png" alt="draggable-main" width="100%"/>

|                                                                         Web                                                                         |                                                                        Mobile                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/4216651/128471613-6b306ec7-3d1e-4c24-a198-e32b9491c70d.gif" alt="draggable-web" width="1050" /> | <img src="https://user-images.githubusercontent.com/4216651/129350968-ba99c817-9cda-46ea-b914-78d9ce76a3bf.gif" alt="draggable-mobile" width="300"/> |

## About The Project

This project is documentation of a study to develop the Drag & Drop visual interaction without `HTML Drag & Drop API`.

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white"/>
</p>

### Built With

- React
- TypeScript
- jest
- vite
- pnpm
- react-device-detect

## Getting Started

### Prerequisites

- Before you start, install `pnpm` package to global

  ```sh
  npm install --global pnpm
  ```

- Docker install required

  https://www.docker.com/get-started

### Installation

#### Local

1.  Clone the repo

    ```sh
    git clone https://github.com/VannsKang/React-Draggable-Box-Without-HTML-API.git
    ```

2.  Install NPM packages

    ```sh
    pnpm install
    ```

3.  Run the project

    ```sh
    pnpm dev
    ```

4.  Build the package

    ```sh
    pnpm build
    ```

5.  Test the project

    ```sh
    pnpm test:unit
    ```

#### Docker

1.  Run the Docker inside `./docker` folder

    ```sh
    docker-compose up
    ```

## Introduction

1. The parent component `Draggable` and child component `BOX` were designed as `<Draggable> <Box /> </Draggable>`

2. Not using `HTML Drag & Drop API`. Configured without using any 3rd parties or libraries

3. Declare a certain draggable area for the draggable box.

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
├── package.json
├── tsconfig.json
└── ...
```

## NPM Packages

#### packages

```
dependencies:
react 17.0.2
react-device-detect 2.1.2
react-dom 17.0.2

devDependencies:
@testing-library/jest-dom 5.16.2    identity-obj-proxy 3.0.0
@testing-library/react 12.1.4       jest 27.5.1
@testing-library/user-event 13.5.0  jest-environment-jsdom 27.5.1
@types/react 17.0.40                typescript 4.6.2
@types/react-dom 17.0.13            vite 2.8.6
@vitejs/plugin-react 1.2.0          vite-jest 0.1.4
```

## ETC

This project is optimized & tested in `Chrome`.

---

<h3 align="center">
Developed by SOOM
</h3>

<h4 align="center">
<a href="https://www.soomlog.tech/">Soomlog.tech</a>
</h4>
