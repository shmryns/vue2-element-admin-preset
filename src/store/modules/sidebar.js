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
    const { data } = await getMenu();
    commit('SET_MENU', data);
  },
};

const getters = {
  menu: (state) => state.menu.message,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
