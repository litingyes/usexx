import { isString } from '../is'

/**
 * split string into word groups
 *
 * @param text text to split
 * @param delimiter split regexp, default to /[\s\-_/.]/
 * @returns word groups
 */
export function splitByCase(text: unknown, delimiter?: RegExp): string[] {
  if (!isString(text)) {
    return []
  }

  if (delimiter) {
    return text.split(delimiter).filter(Boolean)
  }

  delimiter = /[\s\-_/.]/
  return text.replace(/([a-z])([A-Z])/g, '$1-$2').split(delimiter).filter(Boolean)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('splitByCase', () => {
    expect(splitByCase(1)).toEqual([])
    expect(splitByCase('1-2', /-/)).toEqual(['1', '2'])

    expect(splitByCase('useXx')).toEqual(['use', 'Xx'])
    expect(splitByCase('use-xx')).toEqual(['use', 'xx'])
    expect(splitByCase('use xx')).toEqual(['use', 'xx'])
    expect(splitByCase('UseXx')).toEqual(['Use', 'Xx'])
    expect(splitByCase('use_xx')).toEqual(['use', 'xx'])
    expect(splitByCase('Use Xx')).toEqual(['Use', 'Xx'])
  })
}
