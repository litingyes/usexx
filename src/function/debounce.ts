/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked.
 *
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay
 * @returns Returns the new debounced function
 *
 * {@link https://lodash.com/docs#debounce}
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 0,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function debounced(this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeoutId = undefined
      func.apply(this, args)
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(later, wait)
  }
}

if (import.meta.vitest) {
  const { test, expect, vi } = import.meta.vitest

  test('debounce', async () => {
    vi.useFakeTimers()

    const fn = vi.fn()
    const debounced = debounce(fn, 100)
    expect(fn).not.toHaveBeenCalled()

    debounced()
    expect(fn).not.toHaveBeenCalled()

    debounced()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })
}
