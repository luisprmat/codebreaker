<script setup>
import CreateCode from './components/CreateCode.vue'
</script>

<template>
  <header class="flex">
    <h1>
      <img
        src="./assets/logo.svg"
        alt="Codebreaker"
        aria-label="Codebreaker"
        class="w-52 print:w-36 print:invert"
      />
    </h1>
  </header>

  <CreateCode />
</template>
