# TypeScript Workshops

## Intro

This repository serves as an introduction to *TypeScript*. After reading through the documentation and completing the challenges, you should have a basic grasp of how the language works.

## Setup

[VSCode](code.visualstudio.com/download) is a great editor for *TypeScript*. It has great navigation for the language and includes numerous extensions for both *JavaScript* and *Typescript*.

Ensure you have `npm` installed via [Homebrew](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) or via [Node](https://nodejs.org/en/download/).

Then install local packages from the root of the project.
```shell
npm install
```

## Folders

#### Basic Types

In the [`basic-types/`](./basic-types/) folder, there is some documentation on basic types and data structures. These come from https://www.typescriptlang.org/. Go through each file and experiment with the code.

#### TSC Playground

*TypeScript* is compiled into *JavaScript* for both the browser and *Node.js*. The [`tsc-playground/`](./tsc-playground) folder contains an `index.ts` file that can be compiled into valid *JavaScript*.

```shell
npm run compile-typescript
```

This command will output an `index.js` file. You can play around with different compilation flags. See documentation on that [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

#### Gimme It

Here's a simple Kata to familiarize yourself with the syntax of the language.

Get all tests passing by removing `x` from `xit` and running the tests.

```shell
npm test gimme-it/
```

#### Two Fer

This challenge requires string interpolation and input/return typing for functions.

```shell
npm test two-fer/
```

*Taken from an [Exercism](https://exercism.io/) challenge

### Space Age

This challenge requires more complex typing.

```shell
npm test space-age/
```

*Taken from an [Exercism](https://exercism.io/) challenge
