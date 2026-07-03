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
  "extends": "@mareuter/typescript-config/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "."
  },
  "exclude": ["node_modules", "dist"]
}
```
