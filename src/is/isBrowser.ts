/**
 * @returns {boolean} Returns true if is in browser
 *
 *
 * @after v0.2.0
 */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof document !== 'undefined'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isBrowser', () => {
    expect(isBrowser()).toBe(true)
  })
}
