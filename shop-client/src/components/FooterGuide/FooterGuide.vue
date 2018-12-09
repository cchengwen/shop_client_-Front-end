<template><!--底部组件-->
    <div class="footer_guide">
        <!--class="guide_item on"：注意：这里多了个on，所以这会有绿色的样式
            想要在点击时图标颜色改变，改变如下：
            要用强制绑定class，以动态class的方式去指定。在用绑定class时候，要想是否用对象语法。
            用对象语法判断：类名 : ===(布尔值)$route.path(路径 )
            :class="{on: '/msite'===$route.path}":
            
            @click="goTo('/msite')":定义要去的路径方法
          -->
        <span class="guide_item " :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
            <span class="item_icon">
                <!-- i标签用于图标显示 -->
                <i class="iconfont icon-waimai"></i>                
            </span>
            <span>外卖</span>
        </span>
        <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}"  @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>                
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}"  @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>                
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}"  @click="goTo('/profile')">
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>                
            </span>
            <span>我的</span>
        </a>
    </div>
</template>

<script>
export default {
    methods:{
        goTo(path){
            this.$router.replace(path);
        }
    }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
// 注：要使用以下的样式，要安装插件： npm install stylus stylus-loader --save
    @import "../../common/stylus/mixins.styl";
    .footer_guide   
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #ffffff
        width 100%
        height 50px
        display flex
        .guide_item
                display flex
                flex 1
                text-align  center
                flex-direction column
                align-items center
                margin 5px
                // cursor pointer//小手样式
                color   #999999
                &.on
                    color #02a774
                span 
                    font-size 12px
                    margin-top 2px
                    margin-bottom 2px
                    .iconfont
                        font-size 22px
                     
</style>
