<template>
  <div
    class="home"
    @scroll="onScrollChange($event)"
  >
    <navigation-bar
      :isShowBack="false"
      :navBarStyle="navBarStyle"
    >
      <!-- 左边 -->
      <template v-slot:nav-left>
        <img
          :src="navBarCurrentSlotStyle.leftIcon"
          alt=""
        >
      </template>
      <!-- 中间 -->
      <template v-slot:nav-center>
        <search
          :bgColor="navBarCurrentSlotStyle.search.bgColor"
          :icon="navBarCurrentSlotStyle.search.icon"
          :hintColor="navBarCurrentSlotStyle.search.hintColor"
        ></search>
      </template>
      <!-- 右边 -->
      <template v-slot:nav-right>
        <img
          :src="navBarCurrentSlotStyle.rightIcon"
          alt=""
        >
      </template>
    </navigation-bar>
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
import NavigationBar from './navigationBar/navigationBar.vue'
import search from './search/search.vue'
export default {
  name: 'Home',
  components: {
    mySwiper,
    activity,
    menuOptions,
    secondes,
    goods,
    NavigationBar,
    search
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
      ],
      // navBar 插槽的样式数据，包含页面未开始滑动的时候插槽的样式（默认样式）和页面华东到锚点之后的插槽的样式
      navBarSlotStyle: {
        // 默认样式
        normal: {
          // 左侧插槽
          leftIcon: require('@img/more-white.svg'),
          // 中间插槽
          search: {
            bgColor: '#fff',
            hintColor: '#999',
            icon: require('@img/search.svg')
          },
          // 右侧插槽
          rightIcon: require('@img/message-white.svg')
        },
        // 高亮样式
        highlight: {
          // 左侧插槽
          leftIcon: require('@img/more.svg'),
          // 中间插槽
          search: {
            bgColor: '#d7d7d7',
            hintColor: '#fff',
            icon: require('@img/search-white.svg')
          },
          // 右侧插槽
          rightIcon: require('@img/message.svg')
        }
      },
      // navBar 当前使用的插槽样式
      navBarCurrentSlotStyle: {},
      navBarStyle: {
        position: 'fixed',
        backgroundColor: ''
      },
      // 用来记录页面的滚动值
      scrollTopValue: -1,
      // 锚点值
      ANCHOR_SCROLL_TOP: 160
    }
  },
  methods: {
    /**
     * 监听页面滚动的距离
     * 1. 获取当前页面滚动的距离
     * 2. 计算 navBar 背景颜色 (计算 navBar 背景透明度)
     *    当前滚动的距离 / 固定锚点值 = navBar 背景透明度 opaction
     * 3. opacty >= 1 当前滚动距离 已经超过 当前 锚点值 当前 navBar 插槽样式变为高亮样式  否则 opaction < 1 显示默认状态样式
     */
    onScrollChange(event) {
      // 获取当前页面滚动的距离
      this.scrollTopValue = event.target.scrollTop

      // 计算 navBar 背景色
      let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP

      // 指定 navBar 插槽样式
      if (opacity >= 1) {
        this.navBarCurrentSlotStyle = this.navBarSlotStyle.highlight
      } else {
        this.navBarCurrentSlotStyle = this.navBarSlotStyle.normal
      }

      // 根据透明度比例设置 navBar 背景颜色
      this.navBarStyle.backgroundColor = `rgba(255,255,255,${opacity})`
    }
  },
  created() {
    this.navBarCurrentSlotStyle = this.navBarSlotStyle.normal
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: $bgColor;
  overflow: hidden;
  overflow-y: auto;

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
