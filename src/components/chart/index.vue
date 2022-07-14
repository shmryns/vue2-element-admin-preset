<template>
  <div ref="chartRef" :style="{ height }"></div>
</template>
<script>
import { addListener, removeListener } from 'resize-detector';
import debounce from 'lodash/debounce';
export default {
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    height: {
      type: String,
      default: '400px',
    },
  },
  watch: {
    option(val) {
      this.chart.setOption(val); // 重新设置图表的配置项
    },
  },
  data() {
    return {};
  },
  created() {
    this.resizeListener = debounce(this.resizeListener, 1200);
  },
  mounted() {
    this.initChart();
    addListener(this.$refs.chartRef, this.resizeListener); // 监听窗口变化
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chartRef);
      this.chart.setOption(this.option); // 初始化图表
    },
    resizeListener() {
      this.chart.resize(); // 重置图表大小
    },
  },
  beforeDestroy() {
    removeListener(this.$refs.chartRef, this.resizeListener); // 取消监听窗口变化
    this.chart.dispose(); // 销毁图表
    this.chart = null; // 释放内存
  },
};
</script>
<style lang="scss" scoped></style>
