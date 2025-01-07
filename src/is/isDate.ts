/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an date object, else false
 *
 * @see {@link https://lodash.com/docs#isDate}
 *
 * @since v0.1.0-beta.1
 */
export function isDate(value: unknown) {
  return value instanceof Date
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isDate', () => {
    expect(isDate(new Date())).toBe(true)
  })
}
