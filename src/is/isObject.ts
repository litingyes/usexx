export function isObject(value: unknown) {
  return typeof value === 'object' && value !== null
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(() => {})).toBe(false)
  })
}
