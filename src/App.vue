<template>
  <div id="app">
    <van-nav-bar
      placeholder=""
      :key="this.$route.meta.title"
      fixed
      :title="this.$route.meta.title"
    />

    <div class="app-view">
      <!-- <transition name="van-slide-right" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <transition name="van-slide-right" mode="out-in">
        <router-view name="detail"></router-view>
      </transition> -->

      <transition name="van-slide-right" mode="out-in">
        <keep-alive exclude="Detail">
          <router-view />
          <router-view name="detail"></router-view>
        </keep-alive>
      </transition>

      <!-- <div>
        <transition :name="transitionName">
          <keep-alive>
            <router-view
              :class="homeClass ? 'child-view ss-keep' : 'child-view1 ss-keep'"
              v-if="$route.meta.keepAlive"
            ></router-view>

            <router-view
              :class="homeClass ? 'child-view ns-keep' : 'child-view1 ns-keep'"
              v-if="!$route.meta.keepAlive"
              :key="'time' + new Date().getTime()"
            ></router-view>
          </keep-alive>
        </transition>
      </div>
      ———————————————— 版权声明：本文为CSDN博主「漫步星空ZL」的原创文章，遵循CC
      4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/a13706935773/java/article/details/90082275 -->
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
