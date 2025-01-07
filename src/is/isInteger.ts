/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an integer, else false
 *
 * @see {@link https://lodash.com/docs#isInteger}
 *
 * @since v0.1.0-beta.1
 */
export function isInteger(value: unknown) {
  return Number.isInteger(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isInteger', () => {
    expect(isInteger(1)).toBe(true)
    expect(isInteger(1.1)).toBe(false)
  })
}
