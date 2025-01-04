export function isArrayBuffer(value: unknown) {
  return value instanceof ArrayBuffer
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArrayBuffer', () => {
    expect(isArrayBuffer(new ArrayBuffer(8))).toBe(true)
  })
}
