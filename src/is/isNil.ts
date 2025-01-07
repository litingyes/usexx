import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is null or undefined, else false
 *
 * @see {@link https://lodash.com/docs#isNil}
 *
 * @since v0.1.0-beta.1
 */
export function isNil(value: unknown) {
  return isNull(value) || isUndefined(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNil', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
  })
}
