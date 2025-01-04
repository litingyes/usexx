import { isNumber } from './isNumber'

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
