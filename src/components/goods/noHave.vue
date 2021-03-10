<template>
  <!-- 缺货组件 -->
  <span class="goods-waterfall-item-no-have">缺货</span>
</template>

<script>
export default {
  name: 'NoHave'
}
</script>

<style lang="scss" scoped>
.goods-waterfall-item-no-have {
  background: #999;
  font-size: $fontSize;
  padding: 0 px2rem(4);
  margin-right: px2rem(2);
  border-radius: px2rem(2);
  color: #fff;
}
</style>
