<template>
  <div class="goods-options z-index-2">
    <ul class="goods-options-list">
      <li
        class="goods-options-list-item"
        v-for="(item, index) in options"
        :key="index"
        @click="onOptions(item, index)"
      >
        <a class="goods-options-list-item-content">
          <span
            class="goods-options-list-item-content-name"
            :class="{'goods-options-list-item-content-name-select': selectOptions.id === item.id}"
          >{{ item.name }}</span>
          <span
            class="goods-options-list-item-content-s-icon s-icon"
            :class="[isShowItem && selectOptions.id === item.id ? 'goods-options-list-item-content-caret-open' : 'goods-options-list-item-content-caret-close']"
            v-if="item.subs.length > 0"
          ></span>
        </a>
      </li>
    </ul>

    <!-- 子选项内容 -->
    <transition name="fold-height">
      <div
        class="options-sub-content z-index-2"
        v-show="isShowItem"
      >
        <ul class="options-sub-content-list">
          <li
            class="options-sub-content-list-item"
            v-for="(item, index) in selectOptions.subs"
            :key="index"
            @click="onSubOptions(item, index)"
          >
            <a class="options-sub-content-list-item-content">
              <span
                class="options-sub-content-list-item-content-name"
                :class="{'options-sub-content-list-item-content-name-select': selectOptions.id === item.id}"
              >{{ item.name }}</span>
              <img
                class="options-sub-content-list-item-content-select"
                src="@img/options-select.svg"
                v-show="selectOptions.id === item.id"
                alt=""
              >
            </a>
          </li>
        </ul>

      </div>
    </transition>

    <!-- 遮盖层 -->
    <div
      class="cover"
      v-show="isShowItem"
      @click="isShowItem = !isShowItem"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'goodsOptions', // 商品筛选器
  data() {
    return {
      options: [
        {
          id: '1',
          name: '默认',
          subs: [{
            id: '1',
            name: '默认'
          }, {
            id: '1-2',
            name: '价格由高到底'
          }, {
            id: '1-3',
            name: '销量由高到底'
          }]
        }, {
          id: '2',
          name: '有货优先',
          subs: []
        }, {
          id: '3',
          name: '直营优先',
          subs: []
        }
      ],
      // 选中的筛选项
      selectOptions: {},
      // 标记子选项是否是展开状态
      isShowItem: false
    }
  },
  methods: {
    /**
     * 一级选项点击事件
     * 1. 如果子选项中处于展开状态，则关闭子选项视图
     * 2. 筛选项（item） 包含子选项 并且当前 item 处于一个选中状态下的时候 （item.id === selecOption.id） 展示子选项视图
     * 3. 设置选中项用户点击的 item
     */
    onOptions(item, index) {
      this.selectOptions = item

      // 如果子选项处于展开状态，则关闭子选项视图
      if (this.isShowItem) {
        this.isShowItem = false
        return false
      }
      // item 包含子选项 subs.length > 0
      // item 处于一个选中状态下的时候 item.id === seletOptions.id
      if (item.subs.length > 0 && this.selectOptions.id === item.id) {
        this.isShowItem = true
      }
    },
    /**
     * 子选项点击事件
     * 1. 设置用户点击的选项
     * 2. 将选中项置顶到一级选项
     * 3. 关闭子选项视图
     */
    onSubOptions(item, index) {
      // 设置用户点击的选项
      this.selectOptions = item

      // 将选中项置顶到一级选项
      this.options.forEach(item => {
        item.subs.forEach(i => {
          if (i.id === this.selectOptions.id) {
            item.id = i.id
            item.name = i.name
          }
        })
      })
    }
  },
  created() {
    this.selectOptions = this.options[0]
  }
}
</script>

<style lang="scss" scoped>
.goods-options {
  width: 100%;
  border-bottom: 1px solid $lineColor;
  // 一级选项样式
  &-list {
    display: flex;
    width: 100%;
    height: px2rem(46);
    background: #fff;

    &-item {
      flex-grow: 1;

      &-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        &-name {
          font-size: $fontSize;
          margin-right: $marginSize;
          &-select {
            color: $mainColor;
          }
        }

        // 三角形动画
        &-caret {
          // 子选项展开动画，三角形动画
          &-open {
            transform: rotate(-180deg);
            transition: all 0.3s;
          }
          // 子选项关闭动画
          &-close {
            transform: rotate(0deg);
            transition: all 0.3s;
          }
        }
      }
    }
  }

  .options-sub-content {
    position: absolute;
    width: 100%;
    max-height: px2rem(180);
    overflow: hidden;
    overflow-y: auto;
    background: #fff;

    &-list {
      &-item {
        &-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid $lineColor;
          padding: $marginSize;
          height: px2rem(44);
          box-sizing: border-box;

          &-name {
            font-size: $fontSize;
            flex-grow: 1;
            &-select {
              color: $mainColor;
            }
          }

          &-select {
            width: px2rem(18);
            height: px2rem(18);
          }
        }
      }
    }
  }
}
// 子选项内容展开动画 v-if true 调用
.fold-height-enter-active {
  animation-duration: 0.3s;
  animation-name: fold-height-open;
}
@keyframes fold-height-open {
  0% {
    max-height: 0;
  }
  100% {
    max-height: px2rem(180);
  }
}

// 子选项内容展开动画 v-if false 调用
.fold-height-leave-active {
  animation-duration: 0.3s;
  animation-name: fold-height-leave;
}
@keyframes fold-height-leave {
  0% {
    max-height: px2rem(180);
  }
  100% {
    max-height: 0;
  }
}
</style>
