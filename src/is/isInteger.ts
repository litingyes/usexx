export function isInteger(value: unknown) {
  return Number.isInteger(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isInteger', () => {
    expect(isInteger(1)).toBe(true)
    expect(isInteger(1.1)).toBe(false)
  })
}
