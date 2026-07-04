# `@mareuter/prettier-config`

Prettier configuration for libraries and projects.

## Install

```
pnpm add -DE @mareuter/prettier-config
```

**Note**: To use this package you must install the peer dependencies.

```
pnpm add -DE prettier
```

## Usage

### package.json

```
{ "prettier": "@mareuter/prettier-config" }
```

### .prettierrc

```
"@mareuter/prettier-config"
```

### prettier.config.mjs

```
import myPrettierConfig from '@mareuter/prettier-config'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...myPrettierConfig,
}

export default config
```

This configuration allows for changes to the original one.

**Note**: Don't forget to create a `.prettierignore` file no matter which configuration setup is chosen. A minimal one should include:

```
mode_modules
dist
coverage
```
