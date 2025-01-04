export function isRegExp(value: unknown) {
  return value instanceof RegExp
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isRegExp', () => {
    expect(isRegExp(/a/)).toBe(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('1'))).toBe(true)
  })
}
