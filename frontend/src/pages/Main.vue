<template>
  <div class="main">
    <h1 style="margin: 0">Hi User</h1>
    <h2>Your tasks for today</h2>
    <TaskList :tasks="tasks" />
    <button class="main__btn" @click="router.push('/')">To login</button>
  </div>
</template>

<script setup lang="ts">
import TaskList from '@/components/home/TaskList.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const tasks = [
  {
    id: 1,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  { id: 5, body: 'Maxime alias minima nulla debitis saepe. Recusandae!' },
  { id: 10, body: 'some task' },
  { id: 20, body: 'go on' },
  { id: 50, body: 'test task' },
];
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__btn {
  margin-top: 1vh;
  padding: 4px 10px;
  font-size: 1.1rem;
}
</style>
