import { splitByCase } from './splitByCase'
import { upperFirst } from './upperFirst'

/**
 * format string to start case -- first letter of each word capitalized
 *
 *
 * @param text
 * @returns snake case string
 *
 * {@link https://lodash.com/docs#startCase}
 */
export function startCase(text: string) {
  return splitByCase(text).map(word => upperFirst(word)).join(' ')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('startCase', () => {
    expect(startCase('useXx')).toBe('Use Xx')
    expect(startCase('usexx')).toBe('Usexx')
    expect(startCase('use-xx')).toBe('Use Xx')
    expect(startCase('use xx')).toBe('Use Xx')
    expect(startCase('UseXx')).toBe('Use Xx')
    expect(startCase('use_xx')).toBe('Use Xx')
    expect(startCase('Use Xx')).toBe('Use Xx')
    expect(startCase('Use-Xx')).toBe('Use Xx')
    expect(startCase('USE XX')).toBe('USE XX')
  })
}
