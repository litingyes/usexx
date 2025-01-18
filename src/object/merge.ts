import { isPlainObject } from '../is'

/**
 * The method is like Object.assign except that
 * it recursively merges own and inherited enumerable string keyed properties of source objects
 * into the destination object.
 *
 * @param target the destination object
 * @param sources the source objects
 * @returns object
 *
 * {@link https://lodash.com/docs#merge}
 */
export function merge<T extends object>(target: T, ...sources: any[]): T {
  if (!isPlainObject(target)) {
    return target
  }

  const validSources = sources.filter(source => isPlainObject(source))
  if (!validSources.length)
    return target

  const source = validSources.shift()
  for (const key in source) {
    if (isPlainObject(source[key])) {
      if (!Object.prototype.hasOwnProperty.call(target, key))
        Object.assign(target, { [key]: {} })
      merge((target as Record<string, any>)[key], source[key])
    }
    else {
      Object.assign(target, { [key]: source[key] })
    }
  }

  return merge(target, ...validSources)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('merge', () => {
    expect(merge([], { name: 'merge' })).toEqual([])
    expect(merge({}, 1, '2', { name: 'merge' })).toEqual({ name: 'merge' })
    expect(merge({ name: 'Merge' }, { name: 'merge' })).toEqual({ name: 'merge' })
    expect(merge(
      { name: 'merge' },
      { pkg: { name: 'usexx', license: 'MIT' } },
    )).toEqual({ name: 'merge', pkg: { name: 'usexx', license: 'MIT' } })
    expect(merge(
      { name: 'Merge', pkg: { name: 'use', keyword: 'toolkit' } },
      { name: 'merge', pkg: { name: 'usexx', license: 'MIT' } },
    )).toEqual({ name: 'merge', pkg: { name: 'usexx', keyword: 'toolkit', license: 'MIT' } })
  })
}
