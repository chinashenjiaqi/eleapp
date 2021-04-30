<template>
  <div class="news">
    <ul>
      <li v-for="(item,index) in lists"
          :key="index"
          @click="newsclick(item.id)">
        <div class="title">
          <p>{{item.title}}</p>
          <span>{{item.timestr}}</span>
        </div>
        <div class="number">
          <span :class="{ bluemoney: !item.mark==1 ? true:false }">{{item.mark==1 ?"+":"-"}}</span>{{item.number}}
        </div>
      </li>
    </ul>
    <div class="toast"
         v-show="toastShow">
      {{toastText}}
    </div>
  </div>
</template>

<script>
import { getLiushui } from "../util/api"
export default {
  data () {
    return {
      lists: [],
      toastShow: false,
      toastText: ''
    }
  },
  methods: {
    getlists () {
      getLiushui({}).then(res => {
        console.log(res)
        this.lists = res.data;
      }).catch(err => {
        console.log(err)
      })
    },
    newsclick (id) {
      this.toast(id)
    },
    toast (e) {
      console.log(e)
      let self = this
      self.toastText = e
      self.toastShow = true
      setTimeout(function () {
        self.toastShow = false
      }, 1500)
    }
  },
  created () {
    this.getlists();
  }
}
</script>

<style lang="less" scoped>
.news {
  width: 100%;
  padding-bottom: 60px;
  ul {
    margin: 0px;
    padding: 5px;
    li {
      height: 60px;
      background: #f8f8f8;
      margin: 10px 0px;
      border-radius: 15px;
      display: flex;
      padding: 5px 20px;
      justify-content: space-between;
      font-size: 1rem;
      .title {
        line-height: 30px;
        span {
          color: #999;
        }
      }
      .number {
        line-height: 60px;
        font-size: 1.2rem;
        span {
          font-weight: bold;
        }
        .bluemoney {
          color: green;
        }
      }
    }
  }
  // 弹窗
  .toast {
    position: fixed;
    z-index: 2000;
    left: 50%;
    top: 45%;
    transition: all 0.5s;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    border-radius: 5px;
    color: #fff;
    background: rgba(17, 17, 17, 0.7);
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    max-width: 150px;
  }
}
</style>