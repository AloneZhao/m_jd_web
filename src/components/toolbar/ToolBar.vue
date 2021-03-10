<template>
  <div class="tool-bar">
    <div
      class="tool-bar-item"
      v-for="(item, index) in toolBarData"
      @click="selectCheck(item, index)"
      :key="index"
    >
      <img
        class="tool-bar-item-img"
        :src="selectIndex === index ? item.hIcon : item.nIcon"
        alt=""
      >
      <div
        class="tool-bar-item-name"
        :class="{'tool-bar-item-name-h': index === selectIndex}"
      >{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolBar',
  data() {
    return {
      // 定义一个选中时的下标
      selectIndex: 0,
      toolBarData: [
        {
          // 默认未选中时展示的图标
          nIcon: require('@img/home-n.svg'),
          // 选中时展示的图标
          hIcon: require('@img/home-h.svg'),
          // 名称
          name: '首页',
          // 组件名称
          componentName: 'home'
        },
        {
          // 默认未选中时展示的图标
          nIcon: require('@img/shopping-n.svg'),
          // 选中时展示的图标
          hIcon: require('@img/shopping-h.svg'),
          // 名称
          name: '购物车',
          // 组件名称
          componentName: 'shopping'
        },
        {
          // 默认未选中时展示的图标
          nIcon: require('@img/my-n.svg'),
          // 选中时展示的图标
          hIcon: require('@img/my-h.svg'),
          // 名称
          name: '我的',
          // 组件名称
          componentName: 'my'
        }
      ]
    }
  },
  methods: {
    selectCheck(item, index) {
      this.selectIndex = index
      this.$emit('onSelectCheck', item.componentName)
    }
  }
}
</script>

<style lang="scss" scoped>
.tool-bar {
  display: flex;
  width: 100%;
  height: px2rem(46);
  background: #fff;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  border-top: 1px solid $lineColor;
  justify-content: space-around;

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-img {
      width: px2rem(22);
      height: px2rem(22);
    }

    &-name {
      text-align: center;
      font-size: $fontSize;
      margin-top: px2rem(4);

      &-h {
        color: red;
      }
    }
  }
}
</style>
