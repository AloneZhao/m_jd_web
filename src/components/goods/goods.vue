<template>
  <!-- 1. 创建商品列表的基本 html 和 css 让 item 相对于 goods（div）进行排列
    2. 生成不同高度的图片，撑起不同高度的 item
    3. 计算 item 的位置，来达到 从上到下 从左到右依次排列的目的 -->
  <div
    class="goods goods-waterfall"
    :style="{height: goodsViewHegit}"
  >
    <div
      class="goods-waterfall-item"
      ref="waterFallItem"
      :style="goodsItemStyle[index]"
      v-for="(item, index) in goodsList"
      :key="index"
    >

      <img
        class="goods-waterfall-item-img"
        :style="imgStyle[index]"
        :src="item.img"
        alt=""
      >

      <div class="goods-waterfall-item-des">
        <p
          class="goods-waterfall-item-des-title text-aline-2"
          :class="{'goods-waterfall-item-des-hint': !item.isHave}"
        >
          <no-have v-if="!item.isHave"></no-have>
          <direct v-if="item.isDirect"></direct>
          {{ item.name }}
        </p>
        <div class="goods-waterfall-item-des-data">
          <p class="goods-waterfall-item-des-data-price">￥{{ item.price }}</p>
          <p class="goods-waterfall-item-des-data-sell">销量:{{ item.volume }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoHave from './noHave'
import Direct from './direct'
export default {
  name: 'Goods',
  components: {
    NoHave,
    Direct
  },
  data() {
    return {
      // 列表数据
      goodsList: [],

      // 最大高度
      MAX_IMG_HEIGHT: 230,

      // 最小高度
      MIN_IMG_HEIGHT: 178,

      // 定义图片的样式
      imgStyle: [],
      ITEM_MARGIN_SIZE: 8,

      // item样式集合
      goodsItemStyle: [],

      // 视口的高度
      goodsViewHegit: 0
    }
  },
  methods: {
    getAllGoodsList() {
      this.$http.get('/api/goods.json').then(res => {
        console.log('res', res)
        this.goodsList = res.list
        this.initImgHeight()
        // 调用创建瀑布流的方法(dom渲染完毕后调用)
        this.$nextTick(() => {
          this.initWaterFall()
        })
      }).catch(err => {
        console.log('err', err)
      })
    },
    // 随机返回不同图片的高度
    /**
     * 利用 Math。random() -> 0 -- 1 随机数 * 高度区间 + 最低的图片高度
     */
    imgHeight() {
      let retult = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT) + 'px'
      return retult
    },
    // 根据随机生成的图片高度，生成对应的图片高度
    initImgHeight() {
      this.goodsList.forEach(() => {
        let imgHeight = this.imgHeight()
        this.imgStyle.push({
          height: imgHeight
        })
      })
    },
    // 瀑布流布局
    /**
     * 1. 获取所有的item元素
     * 2. 遍历 item 元素 得到每一个 item 高度 + margin 高度
     * 3. 创建 两个变量 leftHeightTotal rightHeightTotal 分别表示左右两侧目前距离顶部的高度
     *  通过对于左右两侧距离顶部的高度，来确定 item 的放置位置
     *    如果 左侧小于等于右侧的高度，(leftHeightTotal <= rightHeightTotal), 那么 item 就应该放置到左侧，此时 item 距离左侧为0 距离顶部为当前的 leftHeightTotal 否则 item 放置到右侧， item 距离右侧的距离为0 距离顶部 为当前的 rightHeightTotal
     * 4. 计算出 item 的所有样式，配置到 item 上
     * 5. item 配置完成后 对比 两侧最大的高度 最大的高度 为 goods 组件高度
     */

    initWaterFall() {
      // 获取所有item的元素
      let waterFallItemDom = this.$refs['waterFallItem']
      // 定义 item 样式
      let itemStyle = {}

      let leftHeightTotal = 7
      let rightHeightTotal = 7

      if (!waterFallItemDom) return false

      waterFallItemDom.forEach((el, index) => {
        let elHeight = el.clientHeight + this.ITEM_MARGIN_SIZE
        if (leftHeightTotal <= rightHeightTotal) {
          itemStyle = {
            left: '0px',
            top: leftHeightTotal + 'px'
          }
          // 更新左侧距离顶部的高度
          leftHeightTotal += elHeight
        } else {
          itemStyle = {
            right: '0px',
            top: rightHeightTotal + 'px'
          }
          rightHeightTotal += elHeight
        }
        this.goodsItemStyle.push(itemStyle)
        // 更新外层盒子的高度
        this.goodsViewHegit = (leftHeightTotal > rightHeightTotal ? leftHeightTotal : rightHeightTotal) + 'px'
      })
    }
  },
  created() {
    this.getAllGoodsList()
  }
}
</script>

<style lang="scss" scoped>
.goods {
  background-color: $bgColor;
  &-waterfall-item {
    background-color: #fff;
    padding: $marginSize;
    box-sizing: border-box;
    &-des {
      width: 100%;
      &-hint {
        color: #999;
      }
      &-title {
        font-size: $fontTitleSize;
        line-height: px2rem(18);
      }
      &-data {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: $marginSize;
        &-price {
          font-size: $fontTitleSize;
          color: $mainColor;
          font-weight: 500;
        }
        &-sell {
          font-size: $fontSize;
          color: $hintColor;
        }
      }
    }
  }
}
.goods-waterfall {
  position: relative;
  margin: $marginSize 0;
  &-item {
    position: absolute;
    width: 49%;
    border-radius: $radiusSize;
    &-img {
      width: 100%;
    }
  }
}
</style>
