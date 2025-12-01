import { describe, it, expect } from 'vitest'

import getRoll from '../utils/getRoll'

describe('getRoll function', () => {
  it('returns a number 1 or greater', () => {
    const n = getRoll()
    expect(n).toBeGreaterThanOrEqual(1)
  })
})
