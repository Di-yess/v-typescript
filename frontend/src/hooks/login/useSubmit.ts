import { IUserLogin } from '@/types/login';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useSubmit() {
  const router = useRouter();
  const error = ref<string | null>(null);

  const submitInfo = (userInfo: IUserLogin) => {
    if (!userInfo.login && !userInfo.password) {
      error.value = 'Please fill fields';
      return;
    }
    if (!userInfo.login) {
      error.value = 'Login required';
      return;
    }
    if (!userInfo.password) {
      error.value = 'Password required';
      return;
    }

    error.value = null;
    router.push('/main');
  };

  return { error, submitInfo };
}
