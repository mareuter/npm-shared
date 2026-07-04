# `@mareuter/vitest-config`

Vitest configuration for libraries and projects.

## Install

```
pnpm add -DE @mareuter/vitest-config
```

**Note**: To use this package you must install the peer dependencies.

```
pnpm add -DE vitest @vitest/coverage-istanbul @vitest/ui
```

## Usage

Here is a minimal configuration file that extends the provided base configuration:

### vitest.config.js

```
import { defineProject, mergeConfig } from 'vitest/config'
import { baseConfig } from '@mareuter/vitest-config'

export default mergeConfig(
  baseConfig,
  defineProject({
    test: {
      // Package-specific overrides if needed
    },
  }),
)
```
