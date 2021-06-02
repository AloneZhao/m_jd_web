<template>
  <div class="shopping">
    <navigation-bar
      :pageName="'购物车'"
      :isShowBack="false"
    ></navigation-bar>

    shopping
  </div>
</template>

<script>
import NavigationBar from './navigationBar/navigationBar.vue'
export default {
  name: 'Shooping',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss" scoped>
.shopping {
  width: 100%;
  height: 100%;
}
</style>
