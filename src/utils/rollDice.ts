import getRoll from './getRoll'

export default function rollDice(): number {
  const d1 = getRoll()
  const d2 = getRoll()
  return d1 + d2
}
