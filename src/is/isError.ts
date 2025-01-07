/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an error, else false
 *
 * @see {@link https://lodash.com/docs#isError}
 *
 * @since v0.1.0-beta.1
 */
export function isError(value: unknown) {
  return value instanceof Error
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isError', () => {
    expect(isError(new Error('error'))).toBe(true)
  })
}
