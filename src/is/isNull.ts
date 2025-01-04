export function isNull(value: unknown) {
  return value === null
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNull', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
  })
}
