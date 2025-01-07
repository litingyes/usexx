/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a function, else false
 *
 * @see {@link https://lodash.com/docs#isFunction}
 *
 * @since v0.1.0-beta.1
 */
export function isFunction(value: unknown) {
  return typeof value === 'function'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true)
    // eslint-disable-next-line prefer-arrow-callback
    expect(isFunction(function () {})).toBe(true)
  })
}
