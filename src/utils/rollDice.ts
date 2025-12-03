import getRoll from './getRoll'

export default function rollDice(numberofDice?: number): number {
  if (numberofDice === undefined) {
    numberofDice = 2
  }

  let total = 0
  for (let i = 0; i < numberofDice; i++) {
    total += getRoll()
  }
  return total
}
