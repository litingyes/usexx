import { splitByCase } from './splitByCase'

/**
 * format string to kebab case
 *
 * @param text
 * @returns kebab case string
 *
 * {@link https://lodash.com/docs#kebabCase}
 */
export function kebabCase(text: string) {
  return splitByCase(text).map(word => word.toLocaleLowerCase()).join('-')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('kebabCase', () => {
    expect(kebabCase('useXx')).toBe('use-xx')
    expect(kebabCase('usexx')).toBe('usexx')
    expect(kebabCase('use-xx')).toBe('use-xx')
    expect(kebabCase('use xx')).toBe('use-xx')
    expect(kebabCase('UseXx')).toBe('use-xx')
    expect(kebabCase('use_xx')).toBe('use-xx')
    expect(kebabCase('Use Xx')).toBe('use-xx')
    expect(kebabCase('Use-Xx')).toBe('use-xx')
    expect(kebabCase('USE XX')).toBe('use-xx')
  })
}
