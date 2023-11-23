<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const buttons = [
  {
    id: 'increment',
    onClick: () => count.value++,
    order: 'order-0',
    text: '+',
  },
  {
    id: 'decrement',
    onClick: () => count.value--,
    order: 'order-2',
    text: '-',
  },
]
</script>

<template>
  <div aria-label="counter" class="flex justify-center items-center space-x-4 mt-2 text-center">
    <button
      v-for="{ id, onClick, order, text } in buttons" :key="id" :aria-label="`${id}-counter`"
      :class="`w-8 h-8 border border-green border-2 rounded hover:bg-white hover:text-black ${order}`"
      :data-test="`${id}-cta`" @click="onClick"
    >
      {{ text }}
    </button>
    <span aria-label="counter-value" class="w-fit min-w-5 order-1" data-test="counter-value">{{ count }}
    </span>
  </div>
</template>
