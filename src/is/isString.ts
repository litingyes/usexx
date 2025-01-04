export function isString(value: unknown) {
  return typeof value === 'string'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isString', () => {
    expect(isString('')).toBe(true)
    expect(isString(1)).toBe(false)
  })
}
