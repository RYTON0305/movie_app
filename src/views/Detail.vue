<template>
  <div class="detail-container">
    <van-nav-bar
      fixed
      placeholder
      title="电影详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div
      class="detail-box"
      :style="{
        backgroundImage: `url(${bgUrl})`
      }"
    >
      <div class="box-left">
        <img :src="detailList.img | SetImgSize" :alt="detailList.nm" />
      </div>
      <div class="box-right">
        <div class="name">{{ detailList.nm }}</div>
        <div class="item">{{ detailList.enm }}</div>
        <div class="item">{{ detailList.sc }}分</div>
        <div class="item">{{ detailList.cat }}</div>
        <div class="item">{{ detailList.episodeDur }}</div>
        <div class="item">{{ detailList.pubDesc }}</div>
      </div>
    </div>
    <van-divider>{{ detailList.dra }}</van-divider>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(photo, index) in detailList.photos" :key="index">
        <img
          @click="handleImagePreview(detailList.photos, index)"
          class="swipe-image"
          :src="photo | SetImgSize"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { getDetail } from '@/utils/service'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { ImagePreview } from 'vant'
export default {
  name: 'Detail',
  data() {
    return {
      detailList: {},
      bgUrl: '',
      swiperOptions: {
        autoHeight: true,
        // loopedSlides: 3,
        // loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        freeModeSticky: true
        // Some Swiper option/callback...
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    handleImagePreview(photos, index) {
      photos = photos.map(photo => {
        return photo.replace(/w\.h/, `999.999`)
      })

      ImagePreview({
        images: photos,
        startPosition: index,
        onClose() {
          // do something
        }
      })
    }
  },
  mounted() {
    getDetail({ movieId: this.$route.params.movieId }).then(res => {
      this.detailList = res.detailMovie
      this.bgUrl = this.detailList.img.replace(/w\.h/, '1000.1500')
    })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    [ImagePreview.Component.name]: ImagePreview.Component
  }
}
</script>
<style lang="less" scoped>
.detail-container {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: #fff;
  overflow: scroll;
  box-shadow: #ddd 0px 0px 17px 5px;
}
.detail-box {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: -2;
  &::after {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: inherit;
    filter: blur(20px);
    z-index: -1;
    transform: scale(2);
  }
}
.box-left {
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
}
.box-right {
  width: 60vw;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  .name {
    font-size: 20px;
    color: #fff;
    padding: 5px 0;
  }
  .item {
    font-size: 14px;
    color: #eee;
  }
}
.swipe-image {
  width: 30vw;
}
.swiper-container {
  margin: 0 10px;
}
/deep/.van-nav-bar .van-icon {
  color: #000;
}
</style>
