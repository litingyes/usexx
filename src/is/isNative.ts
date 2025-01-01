import { isFunction } from './isFunction'

export function isNative(value: unknown) {
  return isFunction(value) && /native code/.test(value.toString())
}
