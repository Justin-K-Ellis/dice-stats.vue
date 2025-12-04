import { describe, it, expect } from 'vitest'

import getRoll from '../utils/getRoll'

describe('getRoll function', () => {
  it('returns a number 1 or greater', () => {
    const n = getRoll()
    expect(n).toBeGreaterThanOrEqual(1)
  })

  it('return a number 6 or less', () => {
    const n = getRoll()
    expect(n).toBeLessThanOrEqual(6)
  })

  describe('four-sided die', () => {
    it('should handle a die with 4 sides', () => {
      const n = getRoll(4)
      expect(n).toBeDefined()
    })

    it('should roll 1 or more', () => {
      const n = getRoll(4)
      expect(n).toBeGreaterThanOrEqual(1)
    })

    it('should roll 4 or less', () => {
      const n = getRoll(4)
      expect(n).toBeLessThanOrEqual(4)
    })
  })

  describe('20-sided die', () => {
    it('should handle a die with 20 sides', () => {
      const n = getRoll(20)
      expect(n).toBeDefined()
    })

    it('should roll 1 or more', () => {
      const n = getRoll(20)
      expect(n).toBeGreaterThanOrEqual(1)
    })

    it('should roll 20 or less', () => {
      const n = getRoll(20)
      expect(n).toBeLessThanOrEqual(20)
    })
  })
})
