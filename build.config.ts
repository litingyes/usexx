import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    entries: [
      {
        builder: 'mkdist',
        input: './src/',
        outDir: './dist/esm',
        format: 'esm',
        esbuild: {
          define: {
            'import.meta.vitest': 'undefined',
          },
          minifySyntax: true,
        },
      },
      {
        builder: 'mkdist',
        input: './src/',
        outDir: './dist/cjs',
        format: 'cjs',
        esbuild: {
          define: {
            'import.meta.vitest': 'undefined',
          },
          minifySyntax: true,
        },
      },
    ],
    declaration: true,
    alias: {
      '@': resolve(__dirname, './src'),
    },
    clean: true,
    failOnWarn: false,
  },
  {
    entries: ['./src/index.ts'],
    outDir: 'dist/min',
    alias: {
      '@': resolve(__dirname, './src'),
    },
    replace: {
      'import.meta.vitest': 'undefined',
    },
    rollup: {
      inlineDependencies: true,
      output: {
        format: 'esm',
        entryFileNames: 'index.mjs',
        minifyInternalExports: true,
      },
      esbuild: {
        minify: true,
      },
    },
    declaration: true,
    clean: true,
    failOnWarn: false,
  },
  {
    entries: ['./src/index.ts'],
    outDir: 'dist/min',
    alias: {
      '@': resolve(__dirname, './src'),
    },
    replace: {
      'import.meta.vitest': 'undefined',
    },
    rollup: {
      inlineDependencies: true,
      output: {
        format: 'cjs',
        entryFileNames: 'index.js',
      },
      esbuild: {
        minify: true,
      },
    },
    declaration: true,
    clean: true,
    failOnWarn: false,
  },
])
