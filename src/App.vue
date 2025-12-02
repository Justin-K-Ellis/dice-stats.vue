<script setup lang="ts">
import { ref } from 'vue'
import rollDice from './utils/rollDice'
import type { RollStats } from '../types'

const diceStats = ref<RollStats>({})

function handleRoll(): void {
  const roll = rollDice()
  if (!diceStats.value[roll]) {
    diceStats.value[roll] = '#'
  } else {
    diceStats.value[roll] += '#'
  }
}
</script>

<template>
  <main>
    <h1>Dice Stats</h1>
    <div class="controls">
      <button @click="handleRoll">Roll</button>
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
  align-items: center;
}

h1 {
  text-align: center;
}

.controls {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}
</style>
