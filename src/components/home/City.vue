<template>
  <div>
    <van-index-bar
      highlight-color="#f39c12"
      :sticky="false"
      :index-list="indexList"
      :sticky-offset-top="-90"
    >
      <template v-for="(value, cityIndex) in cityObj">
        <van-index-anchor :key="cityIndex" :index="cityIndex">
          {{ cityIndex }}
        </van-index-anchor>
        <van-cell v-for="city in value" :key="city.id" :title="city.nm" />

        <!-- <van-cell :key="city" v-for="city in 5" :title="city" /> -->
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList } from '@/utils/service'

export default {
  name: 'City',
  data() {
    return {
      indexList: [],
      cityObj: {}
    }
  },
  mounted() {
    getCityList().then(res => {
      console.log(res.cities)
      let cities = res.cities
      let cityObj = {}
      let firstLetters = [
        ...new Set(
          cities.map(item => {
            return item.py.slice(0, 1).toUpperCase()
          })
        )
      ].sort()
      firstLetters.unshift('热门')
      this.indexList = firstLetters

      firstLetters.map(item => {
        cityObj[item] = []
        cities.map(city => {
          if (city.py.slice(0, 1).toUpperCase() === item) {
            cityObj[item].push(city)
          }
        })
      })
      cities.map(city => {
        if (city.isHot === 1) {
          cityObj['热门'].push(city)
        }
      })
      this.cityObj = cityObj
      console.log('mounted -> cityObj', cityObj)
    })
  }
}
</script>
<style lang="less" scoped>
// .van-index-bar {
//   height: calc(100vh - 140px);
//   overflow: scroll;
// }
// /deep/.van-index-anchor--sticky {
//   top: -90px;
// }
</style>
