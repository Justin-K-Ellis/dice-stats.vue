<script setup lang="ts">
import { ref } from 'vue'
import rollDice from './utils/rollDice'
import type { RollStats } from '../types'

const diceStats = ref<RollStats>({})
const starterNum = ref<number | null>(null)
const totalRolls = ref(0)

function handleRoll(): void {
  const roll = rollDice()
  if (!diceStats.value[roll]) {
    diceStats.value[roll] = '#'
  } else {
    diceStats.value[roll] += '#'
  }
  totalRolls.value++
}

function handleStarterInput(): void {
  if (starterNum.value) {
    totalRolls.value = 0
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

function handleReset(): void {
  diceStats.value = {}
  starterNum.value = null
  totalRolls.value = 0
}
</script>

<template>
  <main>
    <h1>Dice Stats</h1>
    <div class="controls">
      <button @click="handleRoll">Roll</button>
      <form @submit.prevent="handleStarterInput">
        <input type="number" v-model="starterNum" id="starter-input" placeholder="Starter input" />
        <button type="submit">Enter</button>
      </form>
      <button type="reset" @click="handleReset">Reset</button>
    </div>
    <article>
      <h3 v-if="totalRolls">{{ totalRolls }} {{ totalRolls === 1 ? 'roll' : 'rolls' }}</h3>
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

@media (max-width: 420px) {
  main {
    width: 95%;
  }

  form {
    gap: 0.25rem;
  }

  .controls {
    gap: 0.25rem;
  }
}
</style>
