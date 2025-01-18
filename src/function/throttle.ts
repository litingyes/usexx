import { isUndefined } from '../is'

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations.
 *
 * @param func The function to throttle
 * @param wait The number of milliseconds to throttle invocations to
 * @returns Returns the new throttled function
 *
 * {@link https://lodash.com/docs#throttle}
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 0,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  let lastArgs: Parameters<T> | undefined
  let lastCallTime: number | undefined

  return function throttled(this: any, ...args: Parameters<T>): void {
    let time = Date.now()

    if (isUndefined(lastCallTime)) {
      lastCallTime = time
      func.apply(this, args)
    }
    else {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        time = Date.now()
        if ((time - lastCallTime!) >= wait) {
          func.apply(this, lastArgs!)
          lastCallTime = time
          timeoutId = undefined
          lastArgs = undefined
        }
      }, wait)

      lastArgs = args
    }
  }
}

if (import.meta.vitest) {
  const { test, expect, vi } = import.meta.vitest

  test('throttle', async () => {
    vi.useFakeTimers()

    const fn = vi.fn()
    const throttled = throttle(fn, 100)
    expect(fn).not.toHaveBeenCalled()

    throttled()
    expect(fn).toHaveBeenCalledTimes(1)

    throttled()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(2)

    vi.useRealTimers()
  })
}
