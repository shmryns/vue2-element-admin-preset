<template>
  <el-header class="navbar">
    <div class="left">
      <i :class="opened ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggle"></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ this.$route.meta.title }}</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="item in routes" :to="item.path" :key="item.name">
          <router-link to="/" v-if="!item.path">首页</router-link>
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown @command="handleClick" trigger="click">
        <div class="myadmin">
          <span>{{ name }}&nbsp;&nbsp;</span> <img :src="icon" alt="iconb" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">
            <i class="el-icon-user"></i>
            <span>个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item command="b">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </el-dropdown-item>
          <el-dropdown-item command="c">
            <!-- 退出登录 -->
            <i class="el-icon-position"></i>
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { Message } from 'element-ui';
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      icon: (state) => state.user.userInfo.icon,
      opened: (state) => state.tabbar.opened,
      name: (state) => state.user.userInfo.userName,
    }),
    routes() {
      return this.$route.matched;
    },
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    toggle() {
      this.$store.commit('tabbar/TOGGLE_TABBAR');
    },
    handleClick(command) {
      if (command === 'c') {
        this.$store.commit('user/LOGOUT');
        this.$router.push('/login');
      } else {
        Message.warning('暂未开放');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  margin-left: 8px;
}
.myadmin {
  cursor: pointer;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  min-width: 1000px;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
