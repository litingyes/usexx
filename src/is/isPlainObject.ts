import { isArray } from './isArray'
import { isObject } from './isObject'

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
