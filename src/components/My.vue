<template>
  <div class="my">
    <navigation-bar :pageName="'个人中心'"></navigation-bar>
    my
  </div>
</template>

<script>
import NavigationBar from './navigationBar/navigationBar.vue'
export default {
  name: 'My',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss" scoped>
.my {
  width: 100%;
  height: 100%;
}
</style>
