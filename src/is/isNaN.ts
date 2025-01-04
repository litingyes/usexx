export function isNaN(value: unknown) {
  return Number.isNaN(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNaN', () => {
    expect(isNaN(Number.NaN)).toBe(true)
    expect(isNaN(1)).toBe(false)
    expect(isNaN('1')).toBe(false)
  })
}
