<script setup>
import { ref } from 'vue'
import { useFunctions } from '@/utils/functions'
import Code from '@/components/Code.vue'
import Legend from '@/components/Legend.vue'

import symbols from '@/symbols'

const { alphaRange, combine, shuffle } = useFunctions()

const message = ref('')
const letters = combine(alphaRange('a', 'z'), shuffle(symbols))
</script>

<template>
  <div class="my-8 flex flex-col items-center gap-10">
    <form>
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        class="rounded-xl bg-white/10 px-3 py-2"
      ></textarea>
    </form>

    <Code :message="message" :letters="letters" />

    <Legend :letters="letters" />
  </div>
</template>
