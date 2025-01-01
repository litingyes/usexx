import { isObject } from './isObject'

export function isEmpty(value: unknown) {
  return isObject(value) && Object.keys(value).length === 0
}
