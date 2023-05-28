<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
    :requierd="required"
  />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string; required: boolean }>();
const emit = defineEmits(['update:modelValue']);

const updateInput = (event: Event) => {
  const target = <HTMLInputElement>event.target;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.input {
  width: 150px;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 5px;
}
.input:focus {
  outline: none;
}
</style>
