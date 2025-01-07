import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a plain object, else false
 *
 * @see {@link https://lodash.com/docs#isPlainObject}
 *
 * @since v0.1.0-beta.1
 */
export function isPlainObject(value: unknown) {
  return isObject(value) && !isArray(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject([])).toBe(false)
  })
}
