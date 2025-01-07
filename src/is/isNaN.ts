/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an NaN (not a number), else false
 *
 * @see {@link https://lodash.com/docs#isNaN}
 *
 * @since v0.1.0-beta.1
 */
export function isNaN(value: unknown) {
  return Number.isNaN(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNaN', () => {
    expect(isNaN(Number.NaN)).toBe(true)
    expect(isNaN(1)).toBe(false)
    expect(isNaN('1')).toBe(false)
  })
}
