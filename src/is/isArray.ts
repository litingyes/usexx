export function isArray(value: unknown) {
  return Array.isArray(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray(Array.from({ length: 1 }))).toBe(true)
  })
}
