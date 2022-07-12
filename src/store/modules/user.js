import { login } from '@/api';
import storage from '@/utils/storage';
const state = {
  token: storage.getItem('token'),
  userInfo: storage.getItem('userInfo'),
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params)
        .then((res) => {
          if (res.code === 200) {
            storage.setItem('token', res.data.message.token);
            storage.setItem('userInfo', res.data.message);
            commit('SET_TOKEN', res.data.message.token);
            commit('SET_USERINFO', res.data.message);
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
