<script setup>
import CreateCode from './components/CreateCode.vue'
</script>

<template>
  <div class="container mx-auto">
    <header class="flex justify-center">
      <h1>
        <img
          src="./assets/logo.svg"
          alt="Codebreaker"
          aria-label="Codebreaker"
        />
      </h1>
    </header>

    <CreateCode />
  </div>
</template>
