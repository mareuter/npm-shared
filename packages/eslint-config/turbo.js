import turboPlugin from 'eslint-plugin-turbo'
import { base as baseConfig } from './base'

/**
 * A custom ESLint configuration for libraries/projects that use Turbo.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]
