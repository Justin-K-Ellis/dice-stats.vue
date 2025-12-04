import getRoll from './getRoll'
import type { Die } from '../../types'

export default function rollDice(numberofDice?: number, die?: Die): number {
  if (numberofDice === undefined) {
    numberofDice = 2
  }

  let total = 0
  for (let i = 0; i < numberofDice; i++) {
    total += getRoll(die)
  }
  return total
}
