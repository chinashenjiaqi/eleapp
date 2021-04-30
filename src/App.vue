<template>
  <div id="app">
    <router-view />

  </div>
</template>
<script>
export default {
  data () {
    return {
      location: "",
    }
  },
  methods: {
    getLocation () {
      var that = this;
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,

        })

        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        });

        function onComplete (data) {
          console.log(data)
          that.$store.dispatch("SET_ADDRESS", data.formattedAddress);
          that.$store.dispatch("SET_LOCATION", data)
          that.location = data;
          // data是具体的定位信息
        }

        function onError (data) {
          // 定位出错

          // that.getlngLocation();
        }
      })
    },
    getlngLocation () {
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log(data);
            that.location = result;
          }
        })
      })
    }
  },
  created () {
    this.getLocation();
  }
}
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
</style>

