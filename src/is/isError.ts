export function isError(value: unknown) {
  return value instanceof Error
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isError', () => {
    expect(isError(new Error('error'))).toBe(true)
  })
}
