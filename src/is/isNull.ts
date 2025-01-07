/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is null, else false
 *
 * @see {@link https://lodash.com/docs#isNull}
 *
 * @since v0.1.0-beta.1
 */
export function isNull(value: unknown) {
  return value === null
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
  })
}
