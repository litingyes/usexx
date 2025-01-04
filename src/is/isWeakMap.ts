export function isWeakMap(value: unknown) {
  return value instanceof WeakMap
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true)
    expect(isWeakMap(1)).toBe(false)
  })
}
