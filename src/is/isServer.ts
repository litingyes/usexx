/**
 * @returns {boolean} Returns true if is in server
 *
 *
 * @after v0.1.0
 */
export function isServer() {
  return !Window
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBoolean', () => {
    expect(isServer()).toBe(false)
  })
}
