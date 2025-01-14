import { splitByCase } from './splitByCase'

/**
 * format string to snake case
 *
 * @param text
 * @returns snake case string
 *
 * {@link https://lodash.com/docs#snakeCase}
 */
export function snakeCase(text: string) {
  return splitByCase(text).map(word => word.toLocaleLowerCase()).join('_')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('snakeCase', () => {
    expect(snakeCase('useXx')).toBe('use_xx')
    expect(snakeCase('usexx')).toBe('usexx')
    expect(snakeCase('use-xx')).toBe('use_xx')
    expect(snakeCase('use xx')).toBe('use_xx')
    expect(snakeCase('UseXx')).toBe('use_xx')
    expect(snakeCase('use_xx')).toBe('use_xx')
    expect(snakeCase('Use Xx')).toBe('use_xx')
    expect(snakeCase('Use-Xx')).toBe('use_xx')
    expect(snakeCase('USE XX')).toBe('use_xx')
  })
}
