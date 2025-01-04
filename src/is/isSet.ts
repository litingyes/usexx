export function isSet(value: unknown) {
  return value instanceof Set
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSet', () => {
    expect(isSet(new Set())).toBe(true)
  })
}
