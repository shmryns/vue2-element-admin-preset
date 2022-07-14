import { getMenu } from '@/api/sidebar';
const state = {
  menu: [],
};

const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu;
  },
};

const actions = {
  getMenu: async ({ commit }) => {
    const {
      data: { message },
    } = await getMenu();
    commit('SET_MENU', message);
  },
};

const getters = {
  hasChild: (state) => state.menu.filter((item) => item.children),
  notChild: (state) => state.menu.filter((item) => !item.children),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
