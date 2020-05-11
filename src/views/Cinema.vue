<template>
  <div>
    <div class="tab-fixed">
      <van-dropdown-menu active-color="#f39c12">
        <!-- <van-dropdown-item v-model="value" :options="option" /> -->
        <van-dropdown-item title="全城"> </van-dropdown-item>
        <van-dropdown-item title="品牌"> </van-dropdown-item>
        <van-dropdown-item title="特色"> </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <ul class="cinema-list">
      <li class="cinema-item" v-for="item in cinemaList" :key="item.id">
        <div class="item-top">
          <div class="top-left">{{ item.nm }}</div>
          <div class="top-right" v-if="item.sellPrice">
            <span class="price">{{ item.sellPrice }}</span>
            元起
          </div>
        </div>
        <div class="item-middle">
          <div class="middle-left">
            {{ item.addr }}
          </div>
          <div class="middle-right">{{ item.distance }}</div>
        </div>
        <div class="item-bottom">
          <template v-for="(value, tag) in item.tag">
            <span
              v-if="value === 1"
              class="tag"
              :class="tag | cinemaTagClass"
              :key="tag"
              >{{ tag | cinemaTagName }}</span
            >
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCinema } from '@/utils/service'

export default {
  name: 'Cinema',
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      cinemaList: []
    }
  },
  mounted() {
    console.log('影院' + this._state.id)
    getCinema({ cityId: this._state.id }).then(res => {
      console.log(res)
      this.cinemaList = res.cinemas
    })
  },
  filters: {
    cinemaTagName: tag => {
      let tagName = {
        allowRefund: '退',
        buyout: '月卡',
        cityCardTag: '城市卡',
        deal: '成交',
        endorse: '推荐',
        giftTag: '礼品卡',
        sell: '售',
        snack: '零食',
        vipTag: 'vip优惠'
      }
      // let index = Object.keys(tagName).findIndex(item => {
      //   return item === tag
      // })
      // return Object.values(tagName)[index]
      return tagName[tag]
    },
    cinemaTagClass: tag => {
      let tagName = {
        allowRefund: 'tag-blue',
        buyout: 'tag-blue',
        cityCardTag: 'tag-blue',
        deal: 'tag-blue',
        endorse: 'tag-orange',
        giftTag: 'tag-blue',
        sell: 'tag-blue',
        snack: 'tag-orange',
        vipTag: 'tag-blue'
      }
      let index = Object.keys(tagName).findIndex(item => {
        return item === tag
      })
      // console.log(
      //   'Object.values(tagName)[index]',
      //   Object.values(tagName)[index]
      // )
      return Object.values(tagName)[index]
    }
  }
}
</script>
<style lang="less" scoped>
.cinema-item {
  padding: 20px 0;
  margin: 0 20px;
  border-bottom: 1px solid #ddd;
  &:last-of-type {
    border: none;
  }
}
.item-top {
  font-size: 16px;
}
.top-left {
  font-weight: 700;
}
.top-right {
  color: #ee0a24;
  .price {
    font-size: larger;
  }
}
.item-middle {
  font-size: 14px;
  color: #666;
  margin: 15px 0;
}
.item-top,
.item-middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-bottom {
  .tag {
    font-size: 14px;
    border: solid 1px;
    padding: 3px;
    border-radius: 2px;
    margin-right: 8px;
  }
  .tag-blue {
    color: #03a9f4;
    border-color: #03a9f4;
  }
  .tag-orange {
    color: #f39c12;
    border-color: #f39c12;
  }
}

.tab-fixed {
  position: fixed;
  top: 46px;
  width: 100vw;
}
.cinema-list {
  margin-top: 48px;
}
</style>
