// 封装一个localStorage的工具类
const namespace = 'vue-element-admin';
export default {
  // 存
  setItem(key, val) {
    const storage = this.getStorage();
    storage[key] = val;
    window.localStorage.setItem(namespace, JSON.stringify(storage));
  },
  // 取
  getItem(key) {
    return this.getStorage()[key];
  },
  // 取所有
  getStorage() {
    return JSON.parse(window.localStorage.getItem(namespace) || '{}');
  },
  // 删
  clearItem(key) {
    const storage = this.getStorage();
    delete storage[key];
    window.localStorage.setItem(namespace, JSON.stringify(storage));
  },
  // 清空
  clearAll() {
    window.localStorage.setItem(namespace, '{}');
  },
};
