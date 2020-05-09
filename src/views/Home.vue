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
      <van-tab name="City">
        <span slot="title"
          >{{ _state.nm }}
          <van-icon
            size="10"
            class="iconfont"
            class-prefix="icon"
            name="sanjiaoxing"
          ></van-icon>
        </span>
        <City />
      </van-tab>
      <van-tab title="正在热映" name="NowPlaying"><NowPlaying /></van-tab>
      <van-tab title="即将上映" name="ComingSoon"><ComingSoon /></van-tab>
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
import { getLocation } from '@/utils/service'

export default {
  name: 'Home',
  data() {
    return {
      activeName: 'NowPlaying'
    }
  },
  methods: {
    tabChange() {
      // console.log(name)z
    }
  },
  components: {
    City,
    NowPlaying,
    ComingSoon,
    Search
  },
  mounted() {
    getLocation().then(res => {
      console.log(res)
      function beforeClose(action, done) {
        if (action === 'confirm') {
          this._state.nm = res.nm
          this._state.id = res.id

          console.log(this._state.nm)

          setTimeout(done, 500)
        } else {
          done()
        }
      }
      this.$dialog.confirm({
        confirmButtonText: '切换定位',
        message: `定位到您所在城市为 ${res.nm}`,
        beforeClose
      })
    })
  }
}
</script>
<style lang="less" scoped>
/deep/.van-sticky--fixed {
  top: 46px;
}
/deep/.van-tab__pane,
.van-tab__pane-wrapper {
  height: calc(100vh - 140px);
  overflow: scroll;
}
</style>
