import { camelCase } from './camelCase'
import { upperFirst } from './upperFirst'

/**
 * format string to pascal case
 *
 * @param text text to format
 * @returns  pascal case string
 */
export function pascalCase(text: string) {
  return upperFirst(camelCase(text))
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('pascalCase', () => {
    expect(pascalCase('useXx')).toBe('UseXx')
    expect(pascalCase('usexx')).toBe('Usexx')
    expect(pascalCase('use-xx')).toBe('UseXx')
    expect(pascalCase('use xx')).toBe('UseXx')
    expect(pascalCase('UseXx')).toBe('UseXx')
    expect(pascalCase('use_xx')).toBe('UseXx')
    expect(pascalCase('Use Xx')).toBe('UseXx')
    expect(pascalCase('Use-Xx')).toBe('UseXx')
    expect(pascalCase('USE XX')).toBe('UseXx')
  })
}
