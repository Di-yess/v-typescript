import { API } from '@/constants';
import { getAccessToken } from '@/functions';
import { IUserLogin } from '@/types/login';

class LoginApi {
  headers;
  constructor() {
    this.headers = { Authorization: `Bearer ${getAccessToken()}` };
  }

  async login(user: IUserLogin) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...this.headers,
        },
        body: JSON.stringify(user),
      };

      const url = `${API}/auth/login`;

      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        return true;
      }

      throw data;
    } catch (error) {
      return error;
    }
  }
}

export default new LoginApi();
