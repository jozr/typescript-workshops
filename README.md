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

### AWS Lambda

This folder contains some basic set up for a potential AWS Lambda written in TypeScript.

The goal is to create a [deployable package](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html) for an AWS Lambda for a [supported Node.js runtime](https://github.com/nodejs/Release#release-schedule).

Let's imagine there's an endpoint `site.com/users/{user_id}`. This is proxied through AWS API Gateway and parsed into an [event](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html) for AWS Lambda consumption.

The [`handler`](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) can accept the following event:
```json
{
  ...
  "pathParameters": {
    "user_id": "abc123"
  }
}
```

and return the response:
```json
{
  "statusCode": 200,
  "body": "{\"user\":{\"id\":\"abc123\",\"email\":\"abc123@email.com\"}}"
}
```

The following steps are recommended:

1. Create a test (TDD!)
1. Pass the test
    1. Hint: `npm test aws-lambda/`
1. Resolve all required types
1. Compile the TypeScript source code
    1. Hint: `npx tsc`
1. Zip up the file for AWS
    1. Hint: `chmod +x .pack_for_aws/run`
