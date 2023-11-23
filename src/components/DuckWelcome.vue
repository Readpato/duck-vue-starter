<script setup lang="ts">
import DuckCounter from '@components/DuckCounter.vue'
import { getAssetURL } from '@utils/index'

const title = 'Duck Vue Starter'
</script>

<template>
  <main class="flex flex-col justify-center items-center w-full h-100vh text-white bg-black font-sans">
    <img class="w-12 h-12" :src="getAssetURL('vue.svg')" alt="Vue logo" data-test="welcome-logo">
    <h1 class="font-light text-2xl" data-test="welcome-header">
      {{ title }}
    </h1>
    <DuckCounter />
  </main>
</template>
