<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main {
  height: calc(100vh - 60px);
}
</style>
