import { isNumber } from './isNumber'

export function isFinite(value: unknown) {
  return isNumber(value) && Number.isFinite(value)
}
