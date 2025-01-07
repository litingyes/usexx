/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a WeekMap object, else false
 *
 * @see {@link https://lodash.com/docs#isWeakMap}
 *
 * @since v0.1.0-beta.1
 */
export function isWeakMap(value: unknown) {
  return value instanceof WeakMap
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true)
    expect(isWeakMap(1)).toBe(false)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a WeakMap object, else false
 */
