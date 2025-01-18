import { writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { globSync } from 'glob'

function exportModules() {
  const dir = resolve(__dirname, '../src')
  const modules = globSync('*/', { cwd: dir })

  let mainModuleCode = `/**
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
    mainModuleCode += `export * from './${module}'\n`

    const moduleDir = resolve(dir, module)
    const moduleFiles = globSync('**/*.ts', { cwd: moduleDir, ignore: ['index.ts'] })
    let moduleCode = `/**
    * @module
    */\n\n`
    moduleFiles.forEach((file) => {
      moduleCode += `export * from './${basename(file, '.ts')}'\n`
    })
    writeFileSync(resolve(moduleDir, 'index.ts'), moduleCode)
  })
  writeFileSync(resolve(dir, 'index.ts'), mainModuleCode)
}

function main() {
  exportModules()
}

main()
