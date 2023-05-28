import { ITask } from '@/types/home';
import { Module } from 'vuex';

export interface IInitState {
  data: ITask[];
  isLoading: boolean;
  isError: boolean;
  error: '';
}

export const taskModule: Module = {
  state: () => ({
    data: [] as ITask[],
    isLoading: false,
    isError: false,
    error: '',
  }),

  getters: {},
  mutations: {
    setTasks(state: IInitState, tasks: ITask[]) {
      state.data = tasks;
    },
    addTasks(state: IInitState, task: ITask) {
      state.data.push(task);
    },
    removeTask(state: IInitState, task: ITask) {
      state.data.filter((item) => item.id !== task.id);
    },
  },
  actions: {},
  namespaced: true,
};
