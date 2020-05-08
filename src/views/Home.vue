<template>
  <div class="container">
    <van-tabs
      @click="tabChange"
      v-model="activeName"
      color="#f39c12"
      title-active-color="#f39c12"
      animated
      swipeable
      sticky
    >
      <van-tab name="a">
        <span slot="title"
          >南京
          <van-icon
            size="10"
            class="iconfont"
            class-prefix="icon"
            name="sanjiaoxing"
          ></van-icon>
        </span>
        <City />
      </van-tab>
      <van-tab title="正在热映" name="b"><NowPlaying /></van-tab>
      <van-tab title="即将上映" name="c"><ComingSoon /></van-tab>
      <van-tab name="c">
        <van-icon
          slot="title"
          size="20"
          class="iconfont"
          class-prefix="icon"
          name="sousuo"
        ></van-icon>
        <Search />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import City from '@/components/home/City.vue'
import NowPlaying from '@/components/home/NowPlaying.vue'
import ComingSoon from '@/components/home/ComingSoon.vue'
import Search from '@/components/home/Search.vue'

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'a'
    }
  },
  methods: {
    tabChange(name) {
      console.log(name)
    }
  },
  components: {
    City,
    NowPlaying,
    ComingSoon,
    Search
  }
}
</script>
<style lang="less" scoped>
/deep/.van-sticky--fixed {
  top: 46px;
}
</style>
