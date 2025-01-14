import { splitByCase } from './splitByCase'

/**
 * format string to upper case
 *
 *
 * @param text
 * @returns upper case string
 *
 * {@link https://lodash.com/docs#upperCase}
 */
export function upperCase(text: string) {
  return splitByCase(text).map(word => word.toUpperCase()).join(' ')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('upperCase', () => {
    expect(upperCase('useXx')).toBe('USE XX')
    expect(upperCase('use-xx')).toBe('USE XX')
    expect(upperCase('use xx')).toBe('USE XX')
    expect(upperCase('UseXx')).toBe('USE XX')
    expect(upperCase('use_xx')).toBe('USE XX')
    expect(upperCase('Use Xx')).toBe('USE XX')
    expect(upperCase('USE XX')).toBe('USE XX')
  })
}
