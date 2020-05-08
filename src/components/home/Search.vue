<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul class="movie-list">
      <li class="list-item">
        <div class="item-left">
          <img src="" alt="" />
        </div>
        <div class="item-center">
          <div class="title">调酒师</div>
          <div class="score">观众评0</div>
          <div class="cast">主演：刘婷风扇电机反杀了定积分</div>
        </div>
        <div class="item-right">
          <!-- <div class="btn-buy">购票</div> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
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
