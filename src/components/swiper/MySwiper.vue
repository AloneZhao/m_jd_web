<template>
  <div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(item, index) in swiperImg"
        :key="index"
      >
        <img
          class="swiper-slide-img"
          :style="{ height: swiperHeight }"
          :src="item"
          alt=""
        >
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'MySwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperImg: {
      type: Array,
      default: () => []
    },
    swiperHeight: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          // 分页器对应的html元素
          el: '.swiper-pagination',
          // 分页器样式
          type: 'bullets',
          // 分页器内的元素，添加类名
          bulletClass: 'custom-bullect-class'
        },
        autoplay: true,
        loop: true,
        autoHeight: true
      }
    }
  }
}
</script>

<style lang="scss">
.swiper-pagination {
  bottom: px2rem(12);
  .custom-bullect-class {
    opacity: 1;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 100%;
    width: px2rem(6);
    height: px2rem(6);
    margin: 0 px2rem(4);
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
}
</style>
