import { isFunction } from './isFunction'

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
