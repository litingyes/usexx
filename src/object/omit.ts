/**
 * omit keys and reserve others in the object
 *
 * @param obj the destination object
 * @param keys the keys to omit
 * @returns object
 *
 * {@link https://lodash.com/docs#omit}
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  keys.forEach(key => delete result[key])
  return result
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('pick', () => {
    const obj = {
      a: 1,
      b: '2',
      c: false,
      d: null,
    }

    expect(omit(obj, ['a'])).toEqual({
      b: '2',
      c: false,
      d: null,
    })
    expect(omit(obj, ['b', 'd'])).toEqual({
      a: 1,
      c: false,
    })
    expect(omit(obj, ['d', 'a'])).toEqual({
      b: '2',
      c: false,
    })
  })
}
