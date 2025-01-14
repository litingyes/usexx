import { splitByCase } from './splitByCase'

/**
 * format string to lower case
 *
 * @param text
 * @returns lower case string
 *
 * {@link https://lodash.com/docs#lowerCase}
 */
export function lowerCase(text: string) {
  return splitByCase(text).map(word => word.toLocaleLowerCase()).join(' ')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('lowerCase', () => {
    expect(lowerCase('useXx')).toBe('use xx')
    expect(lowerCase('usexx')).toBe('usexx')
    expect(lowerCase('use-xx')).toBe('use xx')
    expect(lowerCase('use xx')).toBe('use xx')
    expect(lowerCase('UseXx')).toBe('use xx')
    expect(lowerCase('use_xx')).toBe('use xx')
    expect(lowerCase('Use Xx')).toBe('use xx')
    expect(lowerCase('Use-Xx')).toBe('use xx')
    expect(lowerCase('USE XX')).toBe('use xx')
  })
}
