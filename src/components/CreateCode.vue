<script setup>
import { ref } from 'vue'
import { useFunctions } from '@/utils/functions'
import Code from '@/components/Code.vue'
import Legend from '@/components/Legend.vue'

import symbols from '@/symbols'

const { alphaRange, combine, shuffle } = useFunctions()

const extendedAlphabet = alphaRange('a', 'z')
extendedAlphabet.splice(14, 0, 'nn')

const message = ref('')
const letters = combine(extendedAlphabet, shuffle(symbols))

const print = () => {
  window.print()
}
</script>

<template>
  <div class="my-8 flex flex-1 flex-col items-center gap-10">
    <form class="w-full print:hidden">
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        class="w-full rounded-xl bg-white/10 px-3 py-2"
      ></textarea>

      <div class="mt-2 flex justify-end">
        <button
          type="button"
          @click="print"
          class="rounded-md bg-blue-500 px-4 py-1 text-sm font-semibold disabled:bg-gray-300"
          :disabled="!message"
        >
          Imprimir
        </button>
      </div>
    </form>

    <Code :message="message" :letters="letters" />

    <Legend :letters="letters" v-if="message" />
  </div>
</template>
