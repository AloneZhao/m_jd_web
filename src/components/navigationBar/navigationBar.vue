<template>
  <!--
      插槽来指定 左 中 右来展示不同的形式
      能力：
        1. 默认的展示效果  -> 左边后退按钮 中间页面名称 右边空白内容
        2. 通过插槽来配置具体样式 -> 左  中  右三个插槽 父组件可以通过三个插槽来制定对应样式
        3. 可以接收从外部指定的一个样式(可以在父组件中 指定 navigatinoBar 的 style)
 -->
  <div
    class="navigationBar z-index-max"
    :style="navBarStyle"
    :class="{ 'bottom-line': pageName}"
  >
    <div
      class="left"
      @click="$emit('onLeftClick')"
    >
      <img
        v-if="isShowBack"
        src="@img/back.svg"
        alt=""
      >
      <slot name="nav-left"></slot>
    </div>
    <div class="center">
      <span
        class="page-title"
        v-if="pageName"
      >{{ pageName }}</span>
      <slot name="nav-center"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    pageName: {
      type: String,
      default: ''
    },
    isShowBack: {
      type: Boolean,
      default: true
    },
    // navBar样式
    navBarStyle: {
      type: Object,
      default: () => {
        return {
          backgroundColor: '#fff'
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.navigationBar {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: px2rem(44);
  line-height: px2rem(44);

  .left,
  .right {
    display: flex;
    height: 100%;
    width: px2rem(26);
    padding: 0 $marginSize;
  }

  img {
    width: 100%;
    align-self: center;
  }

  .center {
    display: flex;
    flex: 1;
    height: 100%;
    .page-title {
      align-self: center;
      font-size: $fontSize;
      margin: 0 auto;
    }
  }
}

.bottom-line {
  border-bottom: 1px solid $lineColor;
}
</style>
