<template>
  <div class="tasks-list">
    <div v-for="task in tasks" :key="task.id" class="task">{{ task.body }}</div>
  </div>
</template>

<script setup lang="ts">
import { ITask } from '@/types/home';
defineProps<{ tasks: ITask[] }>();
</script>

<style scoped>
.tasks-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.task {
  font-size: 1.2rem;
}
</style>
