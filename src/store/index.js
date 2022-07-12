import Vue from 'vue';
import Vuex from 'vuex';
// import tabbar from './modules/tabbar'
// import home from './modules/home'
// import tabbar from './modules/tabbar'
Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

// console.log(modules);
export default new Vuex.Store({
  modules,
});
