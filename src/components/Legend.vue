<script setup>
const props = defineProps({
  letters: Object,
})
</script>

<template>
  <div class="flex flex-wrap">
    <div
      v-for="(symbol, letter) in letters"
      class="flex flex-col items-center border border-white/10 p-2"
    >
      <span class="mb-2 font-bold">{{ letter.toUpperCase() }}</span>
      <span class="material-symbols-outlined character">{{ symbol }}</span>
    </div>
  </div>
</template>
