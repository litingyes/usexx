/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a blob, else false
 *
 * @see {@link https://lodash.com/docs#isBlob}
 *
 * @since v0.1.0-beta.1
 */
export function isBlob(value: unknown) {
  return value instanceof Blob
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBlob', () => {
    expect(isBlob(new Blob())).toBe(true)
  })
}
