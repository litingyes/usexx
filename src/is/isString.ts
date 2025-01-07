/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a string, else false
 *
 * @see {@link https://lodash.com/docs#isString}
 *
 * @since v0.1.0-beta.1
 */
export function isString(value: unknown) {
  return typeof value === 'string'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isString', () => {
    expect(isString('')).toBe(true)
    expect(isString(1)).toBe(false)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a string primitive or object, else false
 */
