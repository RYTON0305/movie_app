<template>
  <div id="app">
    <van-nav-bar fixed placeholder :title="this.$route.meta.title" />
    <div class="app-view">
      <router-view />
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
</style>
