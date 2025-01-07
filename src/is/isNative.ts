import { isFunction } from './isFunction'

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a pristine native function, else false
 *
 * @see {@link https://lodash.com/docs#isNative}
 *
 * @since v0.1.0-beta.1
 */
export function isNative(value: unknown) {
  return isFunction(value) && /native code/.test(value.toString())
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNative', () => {
    const originalAssign = Object.assign
    expect(isNative(originalAssign)).toBe(true)
    Object.assign = () => {}
    expect(isNative(Object.assign)).toBe(false)
    Object.assign = originalAssign

    expect(isNative(() => {})).toBe(false)
  })
}
