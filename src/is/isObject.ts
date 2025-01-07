/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a object, else false
 *
 * @see {@link https://lodash.com/docs#isObject}
 *
 * @since v0.1.0-beta.1
 */
export function isObject(value: unknown) {
  return typeof value === 'object' && value !== null
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(() => {})).toBe(false)
  })
}
