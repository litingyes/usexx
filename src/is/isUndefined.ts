export function isUndefined(value: unknown) {
  return typeof value === 'undefined'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(1)).toBe(false)
  })
}
