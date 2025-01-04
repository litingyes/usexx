export function isBoolean(value: unknown) {
  return typeof value === 'boolean'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })
}
