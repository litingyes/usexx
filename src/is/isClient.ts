/**
 * @returns {boolean} Returns true if is in browser
 *
 *
 * @after v0.1.0
 */
export function isClient() {
  return !!Window
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBoolean', () => {
    expect(isClient()).toBe(true)
  })
}
