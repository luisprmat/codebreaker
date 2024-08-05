<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  if (window.confirm('¿Está seguro de hacer eso?')) {
    count.value++
  }
}
</script>

<template>
  <div>
    {{ count }}

    <p>
      <button @click="increment">Aumentar</button>
    </p>
  </div>
</template>
