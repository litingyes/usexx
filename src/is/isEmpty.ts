import { isObject } from './isObject'

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
