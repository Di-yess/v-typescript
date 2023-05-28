<template>
  <div class="tasks-list">
    <div>{{ error }}</div>
    <div v-for="(realTask, index) in realTasks" :key="realTask.id" class="task">
      {{ index + 1 }}. {{ realTask.description }}
      <span @click="deleteTask(realTask)">x</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskApi from '@/api/TaskApi';
import { ITask } from '@/types/home';
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// defineProps<{ tasks: ITask[] }>();

const realTasks = ref<ITask[]>([]);
const error = ref('');

const deleteTask = async (task: ITask) => {
  const result = await TaskApi.deleteTask(task);
  error.value = result.message;

  realTasks.value = realTasks.value.filter(
    (realTask) => realTask.id !== task.id
  );

  setTimeout(() => {
    error.value = '';
  }, 2500);
};

const vuexTasks = computed(() => store.state.task.data);

onMounted(async () => {
  const result = await TaskApi.getTasks();
  console.log('vuexTasks', vuexTasks);
  if (Array.isArray(result)) {
    realTasks.value = result;
    store.commit('task/setTasks', realTasks);
    return;
  }

  error.value = result.message;
});
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
