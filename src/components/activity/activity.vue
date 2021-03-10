<template>
  <div class="activity">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style lang="scss" scoped>
.activity {
  position: relative;
  z-index: 2;
  max-height: px2rem(160);
}
</style>
