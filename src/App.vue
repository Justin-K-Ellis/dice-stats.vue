<script setup lang="ts">
import { ref } from 'vue'
import rollDice from './utils/rollDice'
import type { RollStats } from '../types'

const diceStats = ref<RollStats>({})
const starterNum = ref<number | null>(null)

function handleRoll(): void {
  const roll = rollDice()
  if (!diceStats.value[roll]) {
    diceStats.value[roll] = '#'
  } else {
    diceStats.value[roll] += '#'
  }
}

function handleStarterInput(): void {
  if (starterNum.value) {
    if (starterNum.value > 300) starterNum.value = 300

    diceStats.value = {}
    for (let i = 0; i < starterNum.value; i++) {
      handleRoll()
    }
    starterNum.value = null
  } else {
    return
  }
}
</script>

<template>
  <main>
    <h1>Dice Stats</h1>
    <div class="controls">
      <button @click="handleRoll">Roll</button>
      <form @submit.prevent="handleStarterInput">
        <input type="number" v-model="starterNum" id="starter-input" placeholder="Start input" />
        <button type="submit">Enter</button>
      </form>
    </div>
    <article>
      <p v-for="(rolls, num) in diceStats" :key="num">{{ num }}: {{ rolls }}</p>
    </article>
  </main>
</template>

<style>
body {
  height: 100vh;
}

#app {
  height: 100%;
}

main {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  border-left: 1px solid white;
  border-right: 1px solid white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

button,
input {
  --pico-spacing: 0;
}

.controls {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
</style>
