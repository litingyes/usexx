import { isArray } from './isArray'
import { isObject } from './isObject'

export function isPlainObject(value: unknown) {
  return isObject(value) && !isArray(value)
}
