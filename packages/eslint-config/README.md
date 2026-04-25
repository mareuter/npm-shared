# `@mareuter/eslint-config`

ESLint configuration for libraries and projects.

## Install

```
pnpm add -DE @mareuter/eslint-config
```

**Note**: To use this package you must install the peer dependencies. There are multiple configurations in this package.

For the ``base`` configuration:
```
pnpm add -DE eslint typescript-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-only-warn @eslint/js
```

For the ``turbo`` configuration, install the ``base`` packages and then:
```
pnpm add -DE eslint-plugin-turbo
```

For the ``react`` configuration, install the ``base`` packages and then:
```
pnpm add -DE eslint-plugin-react eslint-plugin-react-hooks globals
