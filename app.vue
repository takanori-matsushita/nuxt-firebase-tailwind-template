<template>
  <div>
    <h1 class="text-red-400">
      test
    </h1>
    {{ count }}
    {{ double }}
    <button @click="increment">
      +
    </button>
    <button @click="decrement">
      -
    </button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const double = computed(() => count.value * 2)
const increment = () => count.value++
const decrement = () => count.value--
</script>
