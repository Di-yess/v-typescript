import { createStore } from 'vuex';

import { taskModule } from './taskModule';

export default createStore({
  modules: {
    task: taskModule,
  },
});

// https://oclk.medium.com/advanced-vuex-state-management-application-is-based-on-vue-3-written-in-typescript-50c2b4682a32
