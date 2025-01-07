/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an array, else false
 *
 * @see {@link https://lodash.com/docs#isArray}
 *
 * @since v0.1.0-beta.1
 */
export function isArray(value: unknown) {
  return Array.isArray(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray(Array.from({ length: 1 }))).toBe(true)
  })
}
