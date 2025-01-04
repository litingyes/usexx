export function isNumber(value: unknown) {
  return typeof value === 'number' && !Number.isNaN(value)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isNumber', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('1')).toBe(false)
    expect(isNumber(Number('1'))).toBe(true)
  })
}
