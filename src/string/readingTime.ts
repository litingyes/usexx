import { isObject } from '../is'

/**
 * Match Chinese characters
 */
export const REGEXP_CHINESE = /[\u4E00-\u9FFF]/g

/**
 * Match Japanese characters
 */
export const REGEXP_JAPANESE = /[\u3040-\u309F\u30A0-\u30FF]/g

/**
 * Match Korean characters
 */
export const REGEXP_KOREAN = /[\uAC00-\uD7AF\u1100-\u11FF]/g

/**
 * Match CJK punctuation
 */
export const REGEXP_CJK_PUNCTUATION = /[\u3000-\u303F\uFF00-\uFF60]/g

/**
 * Options for readingTime
 */
interface ReadingTimeOptions {
  /**
   * Average words read per minute
   */
  wordsPerMinute?: number | {
    /**
     * Average words read per minute for CJK
     */
    cjk: number

    /**
     * Average words read per minute for latin, e.g. English
     */
    latin: number
  }
}

/**
 * Result for readingTime
 */
interface ReadingTimeResult {
  /**
   * String literal for statistics
   */
  readonly text: string

  /**
   * Number of characters
   */
  readonly characters: number

  /**
   * Number of words
   */
  readonly words: number

  /**
   * Estimated reading market
   */
  readonly minutes: number
}

/**
 * Count the number of characters, words, and reading time of a string
 *
 * @param {string} data - String literal for statistics
 * @param {ReadingTimeOptions} options
 * @returns {ReadingTimeResult} result
 */
export function readingTime(data: string, options?: ReadingTimeOptions): ReadingTimeResult {
  const text = data.trim()

  const cjkCharacters
    = (text.match(REGEXP_CHINESE) || []).length
    + (text.match(REGEXP_JAPANESE) || []).length
    + (text.match(REGEXP_KOREAN) || []).length
    + (text.match(REGEXP_CJK_PUNCTUATION) || []).length

  const latinCharacters
    = text
      .replace(REGEXP_CHINESE, '')
      .replace(REGEXP_JAPANESE, '')
      .replace(REGEXP_KOREAN, '')
      .replace(REGEXP_CJK_PUNCTUATION, '')

  const latinWords
    = latinCharacters
      .split(/\s+/)
      .filter(Boolean)
      .length

  const wordsPerMinuteForCjk = isObject(options?.wordsPerMinute) ? options.wordsPerMinute?.cjk : options?.wordsPerMinute ?? 200
  const wordsPerMinuteForLatin = isObject(options?.wordsPerMinute) ? options.wordsPerMinute?.latin : options?.wordsPerMinute ?? 300

  const words = cjkCharacters + latinWords
  const minutes = Math.ceil(cjkCharacters / wordsPerMinuteForCjk + latinWords / wordsPerMinuteForLatin)

  return {
    text,
    characters: text.length,
    words,
    minutes,
  }
}

if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest

  const english = 'Hello, world!'
  const chinese = '你好，世界！'
  const japanese = 'こんにちは世界！'
  const korean = '안녕하세요，세상아！'
  const content = [english, chinese, japanese, korean].join('\n')

  describe('readingTime', () => {
    test('english', () => {
      const { characters, words, minutes } = readingTime(english)

      expect(characters).toBe(13)
      expect(words).toBe(2)
      expect(minutes).toBe(1)
    })

    test('chinese', () => {
      const { characters, words, minutes } = readingTime(chinese)

      expect(characters).toBe(6)
      expect(words).toBe(6)
      expect(minutes).toBe(1)
    })

    test('japanese', () => {
      const { characters, words, minutes } = readingTime(japanese)

      expect(characters).toBe(8)
      expect(words).toBe(8)
      expect(minutes).toBe(1)
    })

    test('korean', () => {
      const { characters, words, minutes } = readingTime(korean)

      expect(characters).toBe(10)
      expect(words).toBe(10)
      expect(minutes).toBe(1)
    })

    test('wordsPerMinute', () => {
      const { characters, words, minutes } = readingTime(content, {
        wordsPerMinute: {
          cjk: 2,
          latin: 5,
        },
      })

      expect(characters).toBe(40)
      expect(words).toBe(26)
      expect(minutes).toBe(13)
    })
  })
}
