/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a set, else false
 *
 * @see {@link https://lodash.com/docs#isSet}
 *
 * @since v0.1.0-beta.1
 */
export function isSet(value: unknown) {
  return value instanceof Set
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSet', () => {
    expect(isSet(new Set())).toBe(true)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a Set object, else false
 */
