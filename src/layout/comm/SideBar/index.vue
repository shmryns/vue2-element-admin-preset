<template>
  <div class="sidebar">
    <Logo></Logo>
    <el-menu
      :style="`width:${opened ? '200px' : '64px'}`"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#232d3b"
      text-color="#c0cad9"
      :collapse="!opened"
      :collapse-transition="false"
    >
      <el-submenu :index="item.path" v-for="item in menu" :key="item.name">
        <span slot="title">
          <i :class="`el-icon-${item.icon}`"> </i>
          {{ item.label }}
        </span>
        <el-menu-item-group>
          <el-menu-item :index="item1.path" v-for="item1 in item.children" :key="item1.name">
            <i :class="`el-icon-${item1.icon}`"> </i>
            {{ item1.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import Logo from './logo';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState({
      opened: (state) => state.tabbar.opened,
    }),
    ...mapGetters('sidebar', ['menu']),
  },
  data() {
    return { isCollapse: false };
  },
  created() {
    this.getMenu();
  },
  mounted() {
    console.log(this.menu);
  },
  methods: {
    ...mapActions('sidebar', ['getMenu']),
  },
  components: {
    Logo,
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border-right: none;
  }
}
</style>
