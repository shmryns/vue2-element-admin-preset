<template>
  <div id="container"></div>
</template>
<script>
const BMapGL = window.BMapGL;
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var map = new BMapGL.Map('container'); // 创建地图实例

      // var point = new BMapGL.Point(112.404, 27.915); // 创建点坐标
      // map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

      // 创建地址解析器实例
      const myGeo = new BMapGL.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(
        '岳麓区麓谷明珠1栋',
        function (point) {
          if (point) {
            map.centerAndZoom(point, 18);
            map.addOverlay(new BMapGL.Marker(point, { title: '岳麓区麓谷明珠1栋' }));
          } else {
            alert('您选择的地址没有解析到结果！');
          }
        },
        '长沙市'
      );

      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      // map.setHeading(64.5); //设置地图旋转角度
      // map.setTilt(73); //设置地图的倾斜角度
      // map.setMapType(BMAP_EARTH_MAP); //设置地图类型
    },
  },
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
