/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an ArrayBuffer, else false
 *
 * @see {@link https://lodash.com/docs#isArrayBuffer}
 *
 * @since v0.1.0-beta.1
 */
export function isArrayBuffer(value: unknown) {
  return value instanceof ArrayBuffer
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(8))).toBe(true)
  })
}
