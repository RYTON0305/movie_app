<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @input="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-divider v-if="flag">对不起，没有搜到相关内容</van-divider>
    <ul v-else class="movie-list">
      <li
        class="list-item"
        v-for="item in searchList"
        :key="item.id"
        @click="handleToDetail(item.id)"
      >
        <div class="item-left">
          <img :src="item.img | SetImgSize" :alt="item.nm" />
        </div>
        <div class="item-center">
          <div class="title">{{ item.nm }}</div>
          <div class="score">
            观众评 <span class="num">{{ item.sc }}</span>
          </div>
          <div class="cast">主演：{{ item.star }}</div>
        </div>
        <div class="item-right">
          <!-- <div class="btn-buy">购票</div> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSearch } from '@/utils/service'
let timer

export default {
  name: 'Search',
  data() {
    return {
      value: '',
      searchList: [],
      flag: false
    }
  },
  methods: {
    onSearch(val) {
      if (timer) {
        //清空timer
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        console.log('触发函数' + val)
        if (val === '') {
          this.searchList = []
          this.flag = false
        } else {
          getSearch({ kw: val, cityId: this._state.id }).then(res => {
            if (res.movies) {
              this.searchList = res.movies.list
              this.flag = false
            } else {
              this.flag = true
            }
          })
        }
      }, 500)
    },
    onCancel() {
      this.$toast('取消')
    },
    handleToDetail(id) {
      console.log(id)
      this.$router.push(`/detail/${id}`).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.list-item {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin: 0 18px;
  border-bottom: 1px solid #ddd;
}
.item-left {
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    background-color: #ccc;
    width: 60px;
    height: 80px;
  }
}
.item-center {
  height: 80px;
  width: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    font-size: 18px;
    font-weight: 700;
  }
  .cast,
  .score {
    font-size: 12px;
    color: #777;
  }
  .cast {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.score {
  .num {
    font-weight: 700;
    color: @text-color;
  }
}
.item-right {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-buy {
  font-size: 14px;
  padding: 5px;
  background-color: #f39c12;
  color: #fff;
  border-radius: 4px;
}
</style>
