<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps<{ msg: string }>();

const emit = defineEmits<{
  (e: 'number', number: number): void;
}>();

const count = ref(0);

const showNumber = () => {
  emit('number', count.value);
};

watch(count, (curr, prev) => {
  emit('number', curr); 
});
</script>

<template>
  <div>
    <h1>Hello {{ msg }}</h1>
    <div class="count">{{ count }}</div>
    <div class="count__btns">
      <button @click="showNumber">Show count</button>
      <button @click="count += 1">Plus count</button>
    </div>
  </div>
</template>

<style scoped>
.count {
  font-size: 2rem;
}

.count__btns {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
