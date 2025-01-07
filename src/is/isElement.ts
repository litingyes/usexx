/**
 *  @param value The value to check
 * @returns {boolean} Returns true if the value is an element, else false
 *
 * @see {@link https://lodash.com/docs#isElement}
 *
 * @since v0.1.0-beta.1
 */
export function isElement(value: unknown) {
  return value instanceof Element
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isElement', () => {
    expect(isElement(document.createElement('div'))).toBe(true)
  })
}
