<!--  -->
<template>
  <div class="footer_guide ">
    <link rel=""
    <a href="javascript:;" class="guide_item " :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}"  @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}"  @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}"  @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    goTo(path){
      // console.log($router);
      // console.log($route)
      this.$router.replace(path)
    }
  }
}

</script>

<style lang='stylus' >
@import "../../common/stylus/mixins.stylus";
@font-face 
  font-family: 'iconfont';  /* project id 1060020 */
  src: url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.eot');
  src: url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.woff') format('woff'),
  url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1060020_j8olxu0cdu.svg#iconfont') format('svg');


.footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
.guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
&.on
    color #02a774
span
    font-size 12px
    margin-top 2px
    margin-bottom 2px
.iconfont
    font-size 22px
  
</style>