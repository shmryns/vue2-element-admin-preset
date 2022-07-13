<template>
  <div class="app">
    <div class="wrapper">
      <div class="sidebar-container" :style="`width:${opened ? '200px' : '64px'}`">
        <side-bar></side-bar>
      </div>
      <div class="main-container">
        <nav-bar></nav-bar>
        <Main></Main>
      </div>
    </div>
  </div>
</template>
<script>
import { SideBar, NavBar, Main } from './comm';
import { mapState } from 'vuex';
export default {
  computed: mapState({
    opened: (state) => state.tabbar.opened,
  }),
  data() {
    return {};
  },
  components: {
    SideBar,
    NavBar,
    Main,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  .sidebar-container {
    width: 200px;
    height: 100vh;
    background: #232d3b;
  }
  .main-container {
    width: 100%;
    height: 100vh;
    background: #eee;
  }
}
</style>
