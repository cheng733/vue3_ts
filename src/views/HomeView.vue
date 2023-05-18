<script setup lang="ts">
import { provide } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import Test from './Test.vue'
import { ref } from 'vue';
provide('count', 1110)
const num = ref(0)
</script>

<template>
  <main>
    <TheWelcome />
    <Test @dasha="num++">
      你是lsp
    </Test>
    <div>{{ num }}</div>
  </main>
</template>
