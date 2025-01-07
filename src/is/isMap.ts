/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a map, else false
 *
 * @see {@link https://lodash.com/docs#isMap}
 *
 * @since v0.1.0-beta.1
 */
export function isMap(value: unknown) {
  return value instanceof Map
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isMap', () => {
    expect(isMap(new Map())).toBe(true)
  })
}
