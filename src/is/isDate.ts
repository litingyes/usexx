export function isDate(value: unknown) {
  return value instanceof Date
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isDate', () => {
    expect(isDate(new Date())).toBe(true)
  })
}
