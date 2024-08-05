<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div class="mt-8 flex justify-center">
    <form>
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        class="rounded-xl bg-white/10 px-3 py-2 text-white"
      ></textarea>
    </form>

    <p>
      {{ message }}
    </p>
  </div>
</template>
