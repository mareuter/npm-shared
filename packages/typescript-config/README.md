# `@mareuter/typescript-config`

TypeScript configuration for libraries and projects.

## Install

```
pnpm add -DE @mareuter/typescript-config
```

**Note**: To use this package you must install the peer dependencies.

```
pnpm add -DE typescript @types/node
```

## Usage

Here is a minimal configuration file that extends the provided configuration:

### tsconfig.json

```
{
  "extends": "@mareuter/typescript-config/tsc/dom",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "."
  },
  "exclude": ["node_modules", "dist"]
}
```

Configuration split up ideas borrowed from [total-typescript](https://github.com/total-typescript/tsconfig).

### Provided configs

```
"./tsc/dom": "./tsc/dom/app.json",
"./tsc/dom/app": "./tsc/dom/app.json",
"./tsc/dom/react": "./tsc/dom/react.json",
"./tsc/no-dom/app": "./tsc/no-dom/app.json"
```
