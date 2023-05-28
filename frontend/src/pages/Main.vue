<template>
  <div class="main">
    <h1 style="margin: 0">Hi User</h1>
    <h2>Your tasks for today</h2>
    <TaskList />
    <CreateTask v-if="openModal" :open="openModal" @close="toggleWindow" />
    <button class="main__btn" @click="router.push('/')">To login</button>
    <button @click="toggleWindow">Create task</button>
  </div>
</template>

<script setup lang="ts">
import CreateTask from '@/components/home/CreateTask.vue';
import TaskList from '@/components/home/TaskList.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const openModal = ref(false);

const toggleWindow = () => {
  openModal.value = !openModal.value;
};

const router = useRouter();
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
