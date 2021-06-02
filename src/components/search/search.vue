<template>
  <div
    class="search"
    :style="{ background: bgColor }"
  >
    <img
      class="search-icon"
      :src="icon"
      alt=""
    >
    <span
      class="search-hint"
      :style="{ clolor: hintColor}"
    >混合开发京东-简易版</span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    icon: {
      type: String,
      default: require('@img/search.svg')
    },
    // 字体颜色
    hintColor: {
      type: String,
      default: '#999'
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  margin: px2rem(6);
  border-radius: px2rem(22);

  &-icon {
    margin-left: $marginSize;
    width: px2rem(16);
  }

  &-hint {
    margin-left: $marginSize;
    font-size: $minFontSize;
  }
}
</style>
