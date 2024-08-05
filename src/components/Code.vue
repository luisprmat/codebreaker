<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: String,
  letters: Object,
})

const words = computed(() => props.message.split(' '))
</script>

<template>
  <div class="flex gap-7 text-center">
    <div v-for="word in words" class="word">
      <span
        v-for="character in word.split('')"
        class="material-symbols-outlined character"
        >{{ letters[character.toLowerCase()] ?? character }}</span
      >
    </div>
  </div>
</template>
