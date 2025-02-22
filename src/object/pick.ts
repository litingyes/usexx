/**
 * pick keys and omit others in the object
 *
 * @param obj the destination object
 * @param keys the keys to pick
 * @returns object
 *
 * {@link https://lodash.com/docs#pick}
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {} as Pick<T, K>)
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

    expect(pick(obj, ['a'])).toEqual({
      a: 1,
    })
    expect(pick(obj, ['b', 'd'])).toEqual({
      b: '2',
      d: null,
    })
    expect(pick(obj, ['d', 'a'])).toEqual({
      a: 1,
      d: null,
    })
  })
}
