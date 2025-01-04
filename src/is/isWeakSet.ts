export function isWeakSet(value: unknown) {
  return value instanceof WeakSet
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true)
    expect(isWeakSet(1)).toBe(false)
  })
}
