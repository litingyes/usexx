/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a number, else false
 *
 * @see {@link https://lodash.com/docs#isNumber}
 *
 * @since v0.1.0-beta.1
 */
export function isNumber(value: unknown) {
  return typeof value === 'number' && !Number.isNaN(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNumber', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('1')).toBe(false)
    expect(isNumber(Number('1'))).toBe(true)
  })
}
