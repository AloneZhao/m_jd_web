<template>
  <div class="home">
    <my-swiper
      :swiperImg="swiperImg"
      :swiperHeight="swiperHeight"
    ></my-swiper>
  </div>
</template>

<script>
import mySwiper from '@c/swiper/MySwiper'
export default {
  name: 'Home',
  components: {
    mySwiper
  },
  data() {
    return {
      swiperImg: [
        require('@img/swiper-1.jpg'),
        require('@img/swiper-2.jpg'),
        require('@img/swiper-3.jpg'),
        require('@img/swiper-4.jpg'),
        require('@img/swiper-5.jpg'),
        require('@img/swiper-6.jpg')
      ],
      swiperHeight: '184px'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
