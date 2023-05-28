<template>
  <form @submit.prevent="submitInfo(user)" class="login-form">
    <input v-model="user.login" class="input" type="text" placeholder="Login" />
    <input
      v-model="user.password"
      class="input"
      type="text"
      placeholder="password"
    />
    <button class="button" type="submit">Sign in</button>
    <LoginError :error="error" />
  </form>
</template>

<script setup lang="ts">
import LoginError from '@/components/login/LoginError.vue';
import useSubmit from '@/hooks/login/useSubmit';
import { ref } from 'vue';

const user = ref({ login: '', password: '' });
const { error, submitInfo } = useSubmit();

// const emit = defineEmits<{
//   (e: 'submitLogin', userInfo: IUserLogin): void;
// }>();
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
}

.input {
  padding: 5px 10px;
  /* border-radius: 5px; */
}

.button {
  padding: 5px 10px;
  font-size: 1rem;
}
</style>
