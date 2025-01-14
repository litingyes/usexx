/**
 * format text with the first character to lower case
 *
 * @param text text to format
 * @returns text with the first character to lower case
 *
 * {@link https://lodash.com/docs#lowerFirst}
 */
export function lowerFirst(text: string) {
  return text
    .trim()
    .charAt(0)
    .toLocaleLowerCase()
    + text.slice(1)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('lowerFirst', () => {
    expect(lowerFirst('useXx')).toBe('useXx')
    expect(lowerFirst('usexx')).toBe('usexx')
    expect(lowerFirst('use-xx')).toBe('use-xx')
    expect(lowerFirst('use xx')).toBe('use xx')
    expect(lowerFirst('UseXx')).toBe('useXx')
    expect(lowerFirst('use_xx')).toBe('use_xx')
    expect(lowerFirst('Use Xx')).toBe('use Xx')
    expect(lowerFirst('Use-Xx')).toBe('use-Xx')
    expect(lowerFirst('USE XX')).toBe('uSE XX')
  })
}
