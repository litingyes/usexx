import { lowerFirst } from './lowerFirst'
import { splitByCase } from './splitByCase'
import { upperFirst } from './upperFirst'

/**
 * format string to camel case
 *
 * @param text string to format
 * @returns camel case string
 *
 * {@link https://lodash.com/docs#camelCase}
 */
export function camelCase(text: string) {
  return lowerFirst(splitByCase(text).map(word => upperFirst(word.toLowerCase())).join(''))
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('camelCase', () => {
    expect(camelCase('useXx')).toBe('useXx')
    expect(camelCase('usexx')).toBe('usexx')
    expect(camelCase('use-xx')).toBe('useXx')
    expect(camelCase('use xx')).toBe('useXx')
    expect(camelCase('UseXx')).toBe('useXx')
    expect(camelCase('use_xx')).toBe('useXx')
    expect(camelCase('Use Xx')).toBe('useXx')
    expect(camelCase('Use-Xx')).toBe('useXx')
    expect(camelCase('USE XX')).toBe('useXx')
  })
}
