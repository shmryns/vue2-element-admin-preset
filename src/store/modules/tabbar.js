const state = {
  opened: true,
};

const mutations = {
  TOGGLE_TABBAR(state) {
    state.opened = !state.opened;
  },
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
