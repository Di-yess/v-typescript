import LoginApi from '@/api/loginApi';
import { IError, IUserLogin, typeGuardError } from '@/types/login';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useSubmit() {
  const router = useRouter();
  const error = ref<string | null>(null);

  const submitInfo = async (userInfo: IUserLogin) => {
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

    const result = await LoginApi.login(userInfo);

    if (result === true) {
      error.value = null;
      router.push('/main');
    } else {
      if (typeGuardError(result)) error.value = result.message;
    }
  };

  return { error, submitInfo };
}
