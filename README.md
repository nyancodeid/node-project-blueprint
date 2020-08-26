# NodeJS Project Blueprint

Getting started using NodeJS with bundled package you need.

![Project CI](https://github.com/nyancodeid/node-project-blueprint/workflows/Project%20CI/badge.svg)
[![dependencies Status](https://david-dm.org/nyancodeid/node-project-blueprint/status.svg)](https://david-dm.org/nyancodeid/node-project-blueprint)
[![devDependencies Status](https://david-dm.org/nyancodeid/node-project-blueprint/dev-status.svg)](https://david-dm.org/nyancodeid/node-project-blueprint?type=dev)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nyancodeid/node-project-blueprint/issues)

## Build In

- `Babel 7` as ES2020 Compiler.
- `Mocha` as Unit Testing.
- `NYC` as Code Coverage report.
- `ESLint` as Code Linter.
- `DotEnv` as env variable.
- `babel-module-resolver` as folder aliases.

## Aliases

| aliases  | folder        | description   |
| -------- | ------------- | ------------- |
| `@src/`  | `./src/`      | Source folder |
| `@test/` | `./__test__/` | Test folder   |

## Using

First you need clone this repository or download it.

Next, install all npm package dependecy

```bash
$ npm install
```

That's it. And to be clear this blueprint project is my workflow to getting done with nodejs project. I build this repository is for my self to match with my coding workflow after all.

## NPM Run Scripts

| script         | description                               |
| -------------- | ----------------------------------------- |
| `start`        | Start project with watch mode (nodemon)   |
| `start:server` | Build project and then run it             |
| `clean`        | Clean build project destination directory |
| `build`        | Build project                             |
| `lint`         | Run ESLint linting                        |
| `lint:fix`     | Run ESLint linting and auto fix           |
| `test`         | Run Mocha Unit Testing                    |
| `cover`        | Run code coverage test and report         |

## VS Code Extension

Here are my recommendations for VS Code Extension to make my workflow or maybe your workflow even better.

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
