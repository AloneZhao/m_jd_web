<template>
  <div class="main">
    <div class="main-content"></div>
    <component :is="currentComponentName"></component>
    <tool-bar @onSelectCheck="onSelectCheck"></tool-bar>
  </div>
</template>

<script>
import toolBar from '@c/toolbar/ToolBar.vue'
export default {
  name: 'Main',
  components: {
    toolBar,
    'home': () => import('@c/Home'),
    'shopping': () => import('@c/Shopping'),
    'my': () => import('@c/My')
  },
  data() {
    return {
      currentComponentName: 'home'
    }
  },
  methods: {
    onSelectCheck(name) {
      console.log(name)
      this.currentComponentName = name
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 32px;
  &-content {
    flex: 1;
  }
}
</style>
