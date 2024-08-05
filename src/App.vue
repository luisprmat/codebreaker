<script setup>
import CreateCode from './components/CreateCode.vue'
</script>

<template>
  <header class="flex justify-center print:justify-start">
    <h1>
      <img
        src="./assets/logo.svg"
        alt="Codebreaker"
        aria-label="Codebreaker"
        class="print:w-36 print:invert"
      />
    </h1>
  </header>

  <CreateCode />
</template>
