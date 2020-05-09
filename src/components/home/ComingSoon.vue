<template>
  <div>
    <ul class="movie-list">
      <li class="list-item" v-for="item in list_coming" :key="item.id">
        <div class="item-left">
          <img :src="item.img | SetImgSize" :alt="item.nm" />
        </div>
        <div class="item-center">
          <div class="title">{{ item.nm }}</div>
          <div class="wish">{{ item.wish }}人想看</div>

          <div class="score">
            观众评 <span class="num">{{ item.sc }}</span>
          </div>
          <div class="cast">主演：{{ item.star }}</div>
        </div>
        <div class="item-right">
          <div class="btn-buy">预售</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getComingSoon } from '@/utils/service'

export default {
  name: 'ComingSoon',
  data() {
    return {
      list_coming: []
    }
  },
  mounted() {
    getComingSoon().then(res => {
      console.log(res)
      this.list_coming = res.comingList
    })
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
  .score,
  .wish {
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
