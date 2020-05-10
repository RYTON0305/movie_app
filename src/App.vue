<template>
  <div id="app">
    <van-nav-bar
      placeholder=""
      :key="this.$route.meta.title"
      fixed
      :title="this.$route.meta.title"
    />

    <div class="app-view">
      <keep-alive>
        <transition name="van-slide-right" mode="out-in">
          <router-view />
        </transition>
      </keep-alive>
      <transition name="van-slide-right" mode="out-in">
        <router-view name="detail"></router-view>
      </transition>
    </div>

    <van-tabbar placeholder route active-color="#F39C12">
      <van-tabbar-item replace to="/home">
        <van-icon
          class="iconfont"
          slot="icon"
          class-prefix="icon"
          name="dianying"
        />
        电影
      </van-tabbar-item>
      <van-tabbar-item replace to="/cinema">
        <van-icon
          class="iconfont"
          slot="icon"
          class-prefix="icon"
          name="huabankaobei"
        />
        影院
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        <van-icon
          class="iconfont"
          slot="icon"
          class-prefix="icon"
          name="weibiaoti--"
        />
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    // console.log(this.$route)
  }
}
</script>
<style lang="less">
@import url('https://at.alicdn.com/t/font_1349038_qk1glmidy1j.css');
.van-nav-bar {
  background-color: @background-color !important;
}
* {
  box-sizing: border-box;
}
.app-view {
  // margin: 46px 0 50px;
  overflow: hidden;
}
</style>
