import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

// 自动导入所有的模块
// const modules = {};
// const files = require.context('./modules', true, /\.js$/);
// files.keys().forEach((key) => {
//   modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
// });

// const dataState = createPersistedState({
//   key: 'dataState',
// });

export default new Vuex.Store({
  modules,
  // plugins: [dataState],
});
