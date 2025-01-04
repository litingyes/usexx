export function isSymbol(value: unknown) {
  return typeof value === 'symbol'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSymbol', () => {
    expect(isSymbol(Symbol('1'))).toBe(true)
    expect(isSymbol(1)).toBe(false)
  })
}
