<template>
  <div class="welcome">
    <el-row>
      <el-col :span="12">
        <v-echart :option="option1"></v-echart>
      </el-col>
      <el-col :span="12">
        <v-echart :option="option2"></v-echart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <v-echart :option="option3"></v-echart>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Chart from '@/components/chart';
import random from 'lodash/random';
export default {
  data() {
    return {
      option1: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      option2: {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
      option3: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      },
    };
  },
  components: {
    'v-echart': Chart,
  },
  created() {
    this.timer = setInterval(() => {
      this.option1.series[0].data = Array.from({ length: 6 }, () => random(0, 50));
      this.option3.series[0].data = Array.from({ length: 7 }, () => random(100, 300));
      this.option1 = { ...this.option1 };
      this.option3 = { ...this.option3 };
    }, 1500);
  },
  beforeDestroy() {
    clearInterval(this.timer); // 销毁定时器
    this.option1 = this.option2 = this.option3 = null; // 释放内存
  },
};
</script>
<style lang="scss" scoped></style>
