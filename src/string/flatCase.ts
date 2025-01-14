import { splitByCase } from './splitByCase'

/**
 * format string to camel case
 *
 * @param text string to format
 * @returns camel case string
 */
export function flatCase(text: string) {
  return splitByCase(text).join('').toLocaleLowerCase()
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('flatCase', () => {
    expect(flatCase('useXx')).toBe('usexx')
    expect(flatCase('usexx')).toBe('usexx')
    expect(flatCase('use-xx')).toBe('usexx')
    expect(flatCase('use xx')).toBe('usexx')
    expect(flatCase('UseXx')).toBe('usexx')
    expect(flatCase('use_xx')).toBe('usexx')
    expect(flatCase('Use Xx')).toBe('usexx')
    expect(flatCase('Use-Xx')).toBe('usexx')
    expect(flatCase('USE XX')).toBe('usexx')
  })
}
