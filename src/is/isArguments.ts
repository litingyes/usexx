/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an arguments object, else false
 *
 * @see {@link https://lodash.com/docs#isArguments}
 *
 * @since v0.1.0-beta.1
 */
export function isArguments(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Arguments]'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArguments', function () {
    // eslint-disable-next-line prefer-rest-params
    expect(isArguments(arguments)).toBe(true)
  })
}
