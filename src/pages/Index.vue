<template>
  <div class="index">
    <div class="index-show">
      <router-view></router-view>
    </div>

    <Tabbar :data="TabMenu" />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  name: "index",
  data () {
    return {
      TabMenu: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "订单", icon: "first-order", path: "/order" },
        { title: "资讯", icon: "info", path: "/news" },
        { title: "我的", icon: "user", path: "/me" },
      ],
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style  scoped>
.index {
  width: 100%;
  height: calc(100%-55px);
}
</style>