<template>
  <div class="me">
    <div id="mapcontainer">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getmap () {
      var map = new AMap.Map('mapcontainer', {
        zoom: 11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode: '3D'//使用3D视图
      });
    }
  },
  created () {
    this.getmap();
  }
}
</script>

<style>
#mapcontainer {
  width: 100%;
  height: 100%;
}
</style>