export function isBlob(value: unknown) {
  return value instanceof Blob
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBlob', () => {
    expect(isBlob(new Blob())).toBe(true)
  })
}
