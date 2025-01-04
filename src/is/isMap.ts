export function isMap(value: unknown) {
  return value instanceof Map
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isMap', () => {
    expect(isMap(new Map())).toBe(true)
  })
}
