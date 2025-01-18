import { writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { globSync } from 'glob'

function exportFunctionModule() {
  const dir = resolve(__dirname, '../src/function')
  const files = globSync('**/*.ts', { cwd: dir, ignore: ['index.ts'] })

  let code = `/**
 * @module
 */\n\n`
  files.forEach((file) => {
    code += `export * from './${basename(file, '.ts')}'\n`
  })
  writeFileSync(resolve(dir, 'index.ts'), code)
}

function exportIsModule() {
  const dir = resolve(__dirname, '../src/is')
  const files = globSync('**/*.ts', { cwd: dir, ignore: ['index.ts'] })

  let code = `/**
 * @module
 */\n\n`
  files.forEach((file) => {
    code += `export * from './${basename(file, '.ts')}'\n`
  })
  writeFileSync(resolve(dir, 'index.ts'), code)
}

function exportStringModule() {
  const dir = resolve(__dirname, '../src/string')
  const files = globSync('**/*.ts', { cwd: dir, ignore: ['index.ts'] })

  let code = `/**
 * @module
 */\n\n`
  files.forEach((file) => {
    code += `export * from './${basename(file, '.ts')}'\n`
  })
  writeFileSync(resolve(dir, 'index.ts'), code)
}

function exportObjectModule() {
  const dir = resolve(__dirname, '../src/object')
  const files = globSync('**/*.ts', { cwd: dir, ignore: ['index.ts'] })

  let code = `/**
 * @module
 */\n\n`
  files.forEach((file) => {
    code += `export * from './${basename(file, '.ts')}'\n`
  })
  writeFileSync(resolve(dir, 'index.ts'), code)
}

function exportModules() {
  const dir = resolve(__dirname, '../src')
  const modules = globSync('*/', { cwd: dir })

  let code = `/**
 * A tool kit for web development.
 *
 * ## Installation
 * \`\`\`bash
 * pnpm add usexx
 * \`\`\`
 *
 * @module
 */\n\n`
  modules.forEach((module) => {
    code += `export * from './${module}'\n`
  })
  writeFileSync(resolve(dir, 'index.ts'), code)
}

function main() {
  exportFunctionModule()
  exportIsModule()
  exportStringModule()
  exportObjectModule()

  exportModules()
}

main()
