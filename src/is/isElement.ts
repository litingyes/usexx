export function isElement(value: unknown) {
  return value instanceof Element
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isElement', () => {
    expect(isElement(document.createElement('div'))).toBe(true)
  })
}
