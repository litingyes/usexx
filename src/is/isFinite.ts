import { isNumber } from './isNumber'

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is an finite number, else false
 *
 * @see {@link https://lodash.com/docs#isFinite}
 *
 * @since v0.1.0-beta.1
 */
export function isFinite(value: unknown) {
  return isNumber(value) && Number.isFinite(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isFinite', () => {
    expect(isFinite(1)).toBe(true)
    expect(isFinite(1 / 0)).toBe(false)
  })
}
