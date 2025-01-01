export function isArguments(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Arguments]'
}
