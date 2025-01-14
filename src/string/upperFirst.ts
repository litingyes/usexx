/**
 * format text with the first character to upper case
 *
 * @param text text to format
 * @returns text with the first character to upper case
 *
 * {@link https://lodash.com/docs#upperFirst}
 */
export function upperFirst(text: string) {
  return text
    .trim()
    .charAt(0)
    .toUpperCase()
    + text.slice(1)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('upperFirst', () => {
    expect(upperFirst('useXx')).toBe('UseXx')
    expect(upperFirst('use-xx')).toBe('Use-xx')
    expect(upperFirst('use xx')).toBe('Use xx')
    expect(upperFirst('UseXx')).toBe('UseXx')
    expect(upperFirst('use_xx')).toBe('Use_xx')
    expect(upperFirst('Use Xx')).toBe('Use Xx')
    expect(upperFirst('USE XX')).toBe('USE XX')
  })
}
