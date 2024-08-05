<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFunctions } from '@/utils/functions'

import symbols from '@/symbols'

const { alphaRange, combine, shuffle } = useFunctions()

const letters = combine(alphaRange('a', 'z'), shuffle(symbols))

const message = ref('')

const words = computed(() => message.value.split(' '))

onMounted(() => {
  console.log(letters)
})
</script>

<template>
  <div class="mt-8 flex flex-col items-center">
    <form>
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        class="rounded-xl bg-white/10 px-3 py-2"
      ></textarea>
    </form>

    <div class="mt-8 flex gap-7 text-center">
      <div v-for="word in words" class="word">
        <span
          v-for="character in word.split('')"
          class="material-symbols-outlined character"
          >{{ letters[character.toLowerCase()] ?? character }}</span
        >
      </div>
    </div>
  </div>
</template>
