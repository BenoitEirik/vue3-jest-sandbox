<template>
<div>
  <ol>
    <li v-for="fruit in fruits" :key="fruit">
      {{ fruit }}
    </li>
  </ol>
  <p>
    Number of fruits: {{ nbFruits }}
  </p>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const fruits = ref(["apple", "banana", "orange"])

const nbFruits = computed(() => fruits.value.length)
</script>