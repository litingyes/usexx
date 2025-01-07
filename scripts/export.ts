import { writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { globSync } from 'fast-glob'

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

function exportModules() {
  const dir = resolve(__dirname, '../src')
  const modules = globSync('*', { cwd: dir, onlyDirectories: true })

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
  exportIsModule()

  exportModules()
}

main()
