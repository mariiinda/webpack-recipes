# webpack-base
A webpack basic setup

### Features:
  - npm start task to use in development
  - npm build task for production
  - [Webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html)
  - Babel ES2015 transpiling
  - CSS autoprefixer + PostCSS
  - JS: lodash

## Project Setup:

**Install node packages**
```shell
$ npm install
```

## Project tasks:

**Run development task (watches source files, starts server with livereload):**

```shell
$ npm start
```
Open browser:  [http://localhost:7070](http://localhost:7070)

**Run build task (minifies scripts) into dist folder:**

```shell
$ npm run build
```
