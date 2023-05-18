<template>
    <div>我问你是谁？</div>
    <slot></slot>
    <div @click="$emit('dasha')">经验值加一</div>
</template>

<script setup lang="ts">
const emits = defineEmits(['dasha'])
emits('dasha')
</script>