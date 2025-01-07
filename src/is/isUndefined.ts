/**
 *  @param value The value to check
 * @returns {boolean} Returns true if the value is undefined, else false
 *
 * @see {@link https://lodash.com/docs#isUndefined}
 *
 * @since v0.1.0-beta.1
 */
export function isUndefined(value: unknown) {
  return typeof value === 'undefined'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(1)).toBe(false)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is undefined, else false
 */
