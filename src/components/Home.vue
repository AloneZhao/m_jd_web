<template>
  <div class="home">
    <my-swiper
      :swiperImg="swiperImg"
      :swiperHeight="swiperHeight"
    ></my-swiper>
    <!-- 活动组件 -->
    <activity>
      <div class="avtivity-520">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in activityImg"
          :key="index"
        >
      </div>
    </activity>
    <!-- 菜单组件 -->
    <menu-options></menu-options>

    <!-- 秒杀组件 -->
    <secondes></secondes>

    <!-- 拼购节组件 -->
    <activity>
      <div class="activity-ping-gou">
        <img
          src="@img/pinGouJie.gif"
          alt=""
        >
      </div>
    </activity>

    <!-- 列表组件 -->
    <goods></goods>
  </div>
</template>

<script>
import mySwiper from '@c/swiper/MySwiper'
import activity from '@c/activity/activity'
import menuOptions from '@c/menu/menuOptions'
import secondes from '@c/seconds/seconds'
import goods from '@c/goods/goods'
export default {
  name: 'Home',
  components: {
    mySwiper,
    activity,
    menuOptions,
    secondes,
    goods
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
      swiperHeight: '184px',
      activityImg: [
        require('@img/520-1.gif'),
        require('@img/520-2.gif'),
        require('@img/520-3.gif')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: $bgColor;

  .avtivity-520 {
    margin-top: px2rem(-8);
    border-top-left-radius: px2rem(6);

    img {
      display: inline-block;
      width: 33.33%;
    }
  }
  .activity-ping-gou {
    background: #fff;
    margin-top: $marginSize;
    img {
      width: 100%;
    }
  }
}
</style>
