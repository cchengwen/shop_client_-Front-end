<template>
    <!-- 
        抽出共有的头部封装成组件，在其他组件中引入该组件后注册使用
     -->
    <header class="header">
        <!-- 定义一个插槽（类似于点位符)
            name的属性值要与其他属性的插槽的slot属性的值保持一致
         -->
        <slot name="left"></slot>
        <span class="header_title">
            <!-- 定义一个title属性可以随着其他组件调用时根据其他组件的需求传递title值进来 -->
            <span class="header_title_text ellipsis">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    // 校验：要求其他组件传入一个String类型的值
    props:{
        title: String
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus`">
    @import "../../common/stylus/mixins.styl"
    .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .icon-sousuo
                font-size 25px
                color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #fff
            text-align center
            .header_title_text
                font-size 20px
                color #fff
                display block
        .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header_login_text
                color #fff
    
     
</style>
