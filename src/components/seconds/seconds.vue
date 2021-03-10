<template>
  <div class="seconds">
    <div class="seconds-header">
      <div class="seconds-header-title">京东秒杀</div>
      <!-- 倒计时组件 -->
      <count-down :endHours="23"></count-down>
    </div>
    <div class="seconds-content">
      <div
        class="seconds-content-item"
        v-for="(item, index) in secodesData"
        :key="index"
      >
        <img
          :src="item.secondsImg"
          class="seconds-content-item-img"
          alt=""
        >
        <div class="seconds-content-item-price">￥{{ item.price | changePriceTwo }}</div>
        <div class="seconds-content-item-oldPrice">￥{{ item.oldPrice | changePriceTwo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import countDown from './countDown'
export default {
  name: 'Seconds',
  data() {
    return {
      secodesData: [
        {
          id: '1',
          secondsImg: require('@img/jingDongMiaoSha-1.jpg'),
          price: '169',
          oldPrice: '180'
        },
        {
          id: '2',
          secondsImg: require('@img/jingDongMiaoSha-2.jpg'),
          price: '169.87',
          oldPrice: '180'
        },
        {
          id: '3',
          secondsImg: require('@img/jingDongMiaoSha-3.jpg'),
          price: '134.50',
          oldPrice: '159.60'
        },
        {
          id: '4',
          secondsImg: require('@img/jingDongMiaoSha-4.jpg'),
          price: '169.5',
          oldPrice: '180'
        },
        {
          id: '5',
          secondsImg: require('@img/jingDongMiaoSha-5.jpg'),
          price: '169.35',
          oldPrice: '180'
        },
        {
          id: '6',
          secondsImg: require('@img/jingDongMiaoSha-6.jpg'),
          price: '170',
          oldPrice: '180'
        },
        {
          id: '7',
          secondsImg: require('@img/jingDongMiaoSha-7.jpg'),
          price: '156.5',
          oldPrice: '180'
        },
        {
          id: '8',
          secondsImg: require('@img/jingDongMiaoSha-8.jpg'),
          price: '169.3',
          oldPrice: '180'
        },
        {
          id: '9',
          secondsImg: require('@img/jingDongMiaoSha-9.jpg'),
          price: '145.54',
          oldPrice: '180'
        },
        {
          id: '10',
          secondsImg: require('@img/jingDongMiaoSha-10.jpg'),
          price: '130.5',
          oldPrice: '180'
        }
      ]
    }
  },
  components: {
    countDown
  }
}
</script>

<style lang="scss" scoped>
.seconds {
  background: #fff;
  border-radius: $radiusSize;
  margin: $marginSize;

  &-header {
    display: flex;
    padding: $marginSize;

    &-title {
      font-size: $fontTitleSize;
    }
  }

  &-content {
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    padding: $marginSize;

    &-item {
      padding: 0 px2rem(12);
      text-align: center;

      &-img {
        width: px2rem(66);
        height: px2rem(66);
      }

      &-price {
        color: $mainColor;
        font-size: $fontSize;
        margin-top: px2rem(4);
      }

      &-oldPrice {
        color: $hintColor;
        font-size: $minFontSize;
        margin-top: px2rem(6);
        text-decoration: line-through;
      }
    }
  }
}
</style>
