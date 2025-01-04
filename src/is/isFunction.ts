export function isFunction(value: unknown) {
  return typeof value === 'function'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true)
    // eslint-disable-next-line prefer-arrow-callback
    expect(isFunction(function () {})).toBe(true)
  })
}
