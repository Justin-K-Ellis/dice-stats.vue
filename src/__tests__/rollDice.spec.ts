import { describe, it, expect } from 'vitest'
import rollDice from '../utils/rollDice'

describe('rollDice function', () => {
  it('should return 2 or more', () => {
    const n = rollDice()
    expect(n).toBeGreaterThanOrEqual(2)
  })

  it('should return 12 or less', () => {
    const n = rollDice()
    expect(n).toBeLessThanOrEqual(12)
  })
})
