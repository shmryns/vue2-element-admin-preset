<template>
  <div class="logo">
    <template v-if="opened"> <img :src="icon" alt="logo" /> admin</template>
    <img v-else :src="icon" alt="logo" />
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: mapState({ icon: (state) => state.user.userInfo.icon, opened: (state) => state.tabbar.opened }),
};
</script>
<style lang="scss" scoped>
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #5cc68f;
  img {
    height: 40px;
    width: 40px;
    vertical-align: middle;
  }
}
</style>
