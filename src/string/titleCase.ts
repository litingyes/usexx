import { splitByCase } from './splitByCase'
import { upperFirst } from './upperFirst'

/**
 * format string to title case
 *
 * @param text string to format
 * @param ignore regexp to ignore format
 * @returns title case string
 */
export function titleCase(text: string, ignore?: RegExp) {
  const prepositions
  // eslint-disable-next-line regexp/no-unused-capturing-group
  = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i

  return splitByCase(text).map((word) => {
    if (ignore?.test(word)) {
      return word
    }

    return prepositions.test(word) ? word.toLowerCase() : upperFirst(word.toLocaleLowerCase())
  }).join(' ')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('titleCase', () => {
    expect(titleCase('hello world')).toBe('Hello World')
    expect(titleCase('install "usexx" with PNPM', /^PNPM$/)).toBe('Install "usexx" with PNPM')
  })
}
