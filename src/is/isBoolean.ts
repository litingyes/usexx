/**
 *  @param value The value to check
 * @returns {boolean} Returns true if the value is a boolean, else false
 *
 * @see {@link https://lodash.com/docs#isBoolean}
 *
 * @since v0.1.0-beta.1
 */
export function isBoolean(value: unknown) {
  return typeof value === 'boolean'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })
}
