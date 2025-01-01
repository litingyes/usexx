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
      },
      {
        builder: 'mkdist',
        input: './src/',
        outDir: './dist/cjs',
        format: 'cjs',
      },
    ],
    declaration: true,
    alias: {
      '@': resolve(__dirname, './src'),
    },
    rollup: {
      emitCJS: true,
      inlineDependencies: true,
      cjsBridge: true,
    },
    clean: true,
  },
  {
    entries: ['./src/index.ts'],
    outDir: 'dist/min',
    alias: {
      '@': resolve(__dirname, './src'),
    },
    rollup: {
      inlineDependencies: true,
      esbuild: {
        minify: true,
        format: 'esm',
      },
      output: {
        format: 'esm',
        entryFileNames: 'index.mjs',
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
    rollup: {
      inlineDependencies: true,
      esbuild: {
        minify: true,
      },
      cjsBridge: true,
      output: {
        format: 'cjs',
        entryFileNames: 'index.js',
      },
    },
    declaration: true,
    clean: true,
  },
])
