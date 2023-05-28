<template>
  <div v-if="error">{{ error }}</div>   
</template>

<script setup lang="ts">
defineProps<{ error: string | null }>();
</script>

<style scoped></style>
