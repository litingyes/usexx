export function isSafeInteger(value: unknown) {
  return Number.isSafeInteger(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSafeInteger', () => {
    expect(isSafeInteger(1)).toBe(true)
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
  })
}
