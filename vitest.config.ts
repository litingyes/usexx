import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['./src/**/*.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: ['./scripts/**', './dist/**'],
    },
    environment: 'happy-dom',
  },
})
