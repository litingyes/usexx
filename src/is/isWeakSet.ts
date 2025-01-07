/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a WeakSet object, else false
 *
 * @see {@link https://lodash.com/docs#isWeakSet}
 *
 * @since v0.1.0-beta.1
 */
export function isWeakSet(value: unknown) {
  return value instanceof WeakSet
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true)
    expect(isWeakSet(1)).toBe(false)
  })
}
