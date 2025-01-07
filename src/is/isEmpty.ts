import { isObject } from './isObject'

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an empty object, else false
 *
 * @see {@link https://lodash.com/docs#isEmpty}
 *
 * @since v0.1.0-beta.1
 */
export function isEmpty(value: unknown) {
  return isObject(value) && Object.keys(value).length === 0
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isEmpty', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
  })
}
