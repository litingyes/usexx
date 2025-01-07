/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a symbol, else false
 *
 * @see {@link https://lodash.com/docs#isSymbol}
 *
 * @since v0.1.0-beta.1
 */
export function isSymbol(value: unknown) {
  return typeof value === 'symbol'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isSymbol', () => {
    expect(isSymbol(Symbol('1'))).toBe(true)
    expect(isSymbol(1)).toBe(false)
  })
}

/**
 * @param value The value to check
 * @returns {boolean} Returns true if the value is a Symbol primitive or object, else false
 */
