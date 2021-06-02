<template>
  <div class="goods-list-page">
    <navigation-bar
      @onLeftClick="onBackClick"
      :pageName="'商品列表'"
    ></navigation-bar>
    <div class="goods-list-page-content">
      <goods-options></goods-options>
    </div>
  </div>
</template>

<script>
import navigationBar from '@c/navigationBar/navigationBar'
import goodsOptions from '@c/goods/goodsOptions'
export default {
  name: 'GoodList',
  components: {
    navigationBar,
    goodsOptions
  },
  methods: {
    // 后退按钮点击事件
    onBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list-page {
  display: flex;
  width: 100%;
  height: 100%;
  background: $bgColor;
  flex-direction: column;

  &-content {
    padding-top: px2rem(45);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
