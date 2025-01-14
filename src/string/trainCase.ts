import { splitByCase } from './splitByCase'
import { upperFirst } from './upperFirst'

/**
 * split string and joins by Train-Case (a.k.a. HTTP-Header-Case) convention
 *
 * @param text string to format
 * @returns train case string
 */
export function trainCase(text: string) {
  return splitByCase(text).map(word => upperFirst(word.toLowerCase())).join('-')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('trainCase', () => {
    expect(trainCase('useXx')).toBe('Use-Xx')
    expect(trainCase('usexx')).toBe('Usexx')
    expect(trainCase('use-xx')).toBe('Use-Xx')
    expect(trainCase('use xx')).toBe('Use-Xx')
    expect(trainCase('UseXx')).toBe('Use-Xx')
    expect(trainCase('use_xx')).toBe('Use-Xx')
    expect(trainCase('Use Xx')).toBe('Use-Xx')
    expect(trainCase('Use-Xx')).toBe('Use-Xx')
    expect(trainCase('USE XX')).toBe('Use-Xx')
  })
}
