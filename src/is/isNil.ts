import { isNull } from './isNull'
import { isUndefined } from './isUndefined'

export function isNil(value: unknown) {
  return isNull(value) || isUndefined(value)
}
