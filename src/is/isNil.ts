import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

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
