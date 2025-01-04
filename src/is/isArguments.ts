export function isArguments(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Arguments]'
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest
  test('isArguments', function () {
    // eslint-disable-next-line prefer-rest-params
    expect(isArguments(arguments)).toBe(true)
  })
}
