import type { Die } from '../../types'

export default function getRoll(die?: Die): number {
  const _die = die === undefined ? 6 : die
  return Math.ceil(Math.random() * _die)
}
