<script setup>
import { computed } from 'vue'
import { useFunctions } from '@/utils/functions'

const { convertCharacter } = useFunctions()

const props = defineProps({
  message: String,
  letters: Object,
})

const words = computed(() => props.message.split(' '))
</script>

<template>
  <div class="mt-auto flex flex-wrap gap-7 text-center">
    <div v-for="word in words" class="word flex gap-x-2">
      <div v-for="character in word.split('')">
        <span class="material-symbols-outlined character text-4xl">{{
          letters[convertCharacter(character)] ?? character
        }}</span>

        <div class="size-12 bg-gray-200"></div>
      </div>
    </div>
  </div>
</template>
