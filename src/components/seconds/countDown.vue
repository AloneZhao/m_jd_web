<template>
  <div class="count-down">
    <span class="count-down-start-time">{{ endHours }}点场</span>
    <span class="count-down-surplus">{{ surplus | surplusTime }}</span>
  </div>
</template>

<script>
/**
 * 倒计时组件具备的能力
 * 能力：传递给组件一个活动开始时间，判断传递的时间是否未开始 进行中 活动结束
 * 1. 当前时间未到开始时间，展示倒计时
 * 2. 当前时间到了开始时间，展示活动进行中
 * 3. 当前时间超过当前时间，展示活动已结束
 */
export default {
  name: 'CountDown', // 倒计时组件
  props: {
    // 父组件传过来的开始时间
    endHours: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      // 展示活动状态字样
      surplus: '',
      // 距离活动开始时间的秒数
      diffSeconds: 0,
      interval: null
    }
  },
  created() {
    this.computedSurplusTime()
  },
  methods: {
    computedSurplusTime() {
      if (this.interval) {
        clearInterval(this.interval)
      }
      // 当前时间
      const date = new Date()

      if (date.getHours() > this.endHours) {
        this.surplus = '活动已结束'
        return false
      }

      if (date.getHours() === this.endHours) {
        this.surplus = '活动进行中'
        return false
      }

      // 利用当前时间与活动开始时间秒数的差距，根据秒数转换为对应的 --> 时:分:秒

      /**
       * 为什么 - 1 ？？？
       * 例如开始时间  16  当前时间 12  差距应该是 3小时59分59秒
       */
      const diffHours = this.endHours - date.getHours() - 1
      const diffMinutes = 60 - date.getMinutes() - 1
      const diffSeconds = 60 - date.getSeconds()

      // 转换为对应秒数
      this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSeconds

      this.interval = setInterval(() => {
        this.diffSeconds -= 1
      }, 1000)
    }
  },
  watch: {
    diffSeconds(newVal) {
      // 当前秒数 / 3600 向下取整 获取到转化为小时数
      const hours = Math.floor(newVal / 3600)
      // 当前秒数 / 60 向下取整
      const minutes = Math.floor(newVal / 60) % 60
      const seconds = newVal % 60
      this.surplus = hours + ':' + minutes + ':' + seconds

      if (newVal === 0) {
        this.computedSurplusTime()
      }
    },
    endHours() {
      this.computedSurplusTime()
    }
  }
}
</script>

<style lang="scss" scoped>
.count-down {
  font-size: $fontSize;
  margin-left: $marginSize;

  span {
    display: inline-block;
    padding: px2rem(2) px2rem(4);
  }

  &-start-time {
    background: $mainColor;
    color: #fff;
    border-top-left-radius: px2rem(4);
    border-bottom-left-radius: px2rem(4);
    border: px2rem(1) solid $lineColor;
  }

  &-surplus {
    background: #fff;
    border-top-right-radius: px2rem(4);
    border-bottom-right-radius: px2rem(4);
    border: px2rem(1) solid $lineColor;
  }
}
</style>
