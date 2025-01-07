/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a SafeInteger, else false
 *
 * @see {@link https://lodash.com/docs#isFunction}
 *
 * @since v0.1.0-beta.1
 */
export function isSafeInteger(value: unknown) {
  return Number.isSafeInteger(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSafeInteger', () => {
    expect(isSafeInteger(1)).toBe(true)
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
  })
}
