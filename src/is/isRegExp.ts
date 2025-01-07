/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a RegExp object, else false
 *
 * @see {@link https://lodash.com/docs#isRegExp}
 *
 * @since v0.1.0-beta.1
 */
export function isRegExp(value: unknown) {
  return value instanceof RegExp
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isRegExp', () => {
    expect(isRegExp(/a/)).toBe(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('1'))).toBe(true)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a RegExp object, else false
 */
