<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';

const number = ref<null | number>(null);
const onChangeNumber = (count: number) => {
  number.value = count;
};
</script>

<template>
  <!-- <HelloWorld @number="onChangeNumber" msg="test" />
  <div>{{ number }}</div> -->
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
