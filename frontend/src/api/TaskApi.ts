import { API } from '@/constants';
import { getAccessToken } from '@/functions';
import { ICreateTask, ITask } from '@/types/home';

class TaskApi {
  headers;
  api;

  constructor() {
    this.headers = { Authorization: `Bearer ${getAccessToken()}` };
    this.api = `${API}/posts`;
  }

  async getTasks() {
    try {
      const options = {
        method: 'GET',
        headers: {
          ...this.headers,
        },
      };

      const response = await fetch(this.api, options);
      const data = await response.json();

      console.log(data);
      if (response.ok) {
        return data;
      } else throw data;
    } catch (error) {
      return error;
    }
  }

  async createTask(task: ICreateTask) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...this.headers,
        },
        body: JSON.stringify(task),
      };
      const response = await fetch(this.api, options);
      const data = await response.json();

      console.log(data);

      if (response.ok) {
        return data;
      } else throw data;
    } catch (error) {
      return error;
    }
  }

  async deleteTask(task: ITask) {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          ...this.headers,
        },
      };
      const response = await fetch(`${this.api}/${task.id}`, options);
      const data = await response.json();

      console.log(data);

      if (response.ok) {
        return data;
      } else throw data;
    } catch (error) {
      return error;
    }
  }
}

export default new TaskApi();
