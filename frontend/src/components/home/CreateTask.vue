<template>
  <div class="background">
    <form class="task-form" @submit.prevent="createTask">
      <div class="close-btn" @click="$emit('close')">X</div>
      <MyInput v-model="task.title" placeholder="title" :required="true" />
      <MyInput
        v-model="task.description"
        placeholder="description"
        :required="true"
      />
      <button type="submit" class="button">Create</button>
      <div v-if="isLoading">Creating task..</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyInput from '../UI/MyInput.vue';
import TaskApi from '@/api/TaskApi';
import { ICreateTask } from '@/types/home';

defineProps<{ open: boolean }>();

const task = ref<ICreateTask>({
  title: '',
  description: '',
});

const isLoading = ref(false);

const createTask = async () => {
  isLoading.value = true;
  const newTask = await TaskApi.createTask(task.value);
  isLoading.value = false;
  console.log(newTask);
};
</script>

<style scoped>
.background {
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10px);
  background-color: rgba(0, 0, 0, 0.154);
}
.task-form {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.close-btn {
  position: absolute;
  right: -19px;
  top: -19px;
  cursor: pointer;
}

.button {
  margin-top: 1px;
  padding: 5px 10px;
}
</style>
