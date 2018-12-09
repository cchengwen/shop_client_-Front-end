<template>
    <div class="msite">
        <!--首页头部-->
        <HeaderTop title="太好吃科技园">
            <!-- slot的属性值要与头部的属性保持一致 -->
            <span class="header_search" slot="left">
                <!-- i标签用于引入图标，也许还有其他用途！！ -->
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录 | 注册</span>
            </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav border-1px">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>甜品饮品</span>
                            </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg">
                            </div>
                            <span>预订早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/9.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/10.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                            <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/11.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/12.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/13.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/14.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>预订早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                </div>
                    <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list border-1px">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <!-- 引入商家商品 -->
            <ShopList></ShopList>
        </div>
    </div>
</template>

<script>
//引入头部组件
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'

//引入swiper轮播插件和css样式
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    //的new swiper要保证页面已经显示了
    mounted(){//在生命周期里边实现轮播
        //创建一个Swiper实例对象，来实现轮播
        new Swiper('.swiper-container',{
            loop: true,//可以循环轮播
            //如果需要分页器
            pagination:{
                el: '.swiper-pagination',
            },
            // // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            //  // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
    },
    //注册 标签
   components:{
       HeaderTop,
       ShopList,
   }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
     @import "../../common/stylus/mixins.styl"
    .msite{//
        width 100%    
    }    
    .msite_nav{
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background #fff
        .swiper-container{
            width 100%
            height 100%
            .swiper-wrapper{
                width 100%
                height 100%
                .swiper-slide{
                    display flex
                    justify-content center
                    align-items flex-start
                    flex-wrap wrap
                    .link_to_food{
                        width 25%                   
                        .food_container{
                            display block
                            width 100%
                            text-align center
                            padding-bottom 10px
                            font-size 0
                            img{
                                display inline-block
                                width 50px
                                height 50px
                            }
                        }
                        span{
                            display block
                            width 100%
                            text-align center
                            font-size 13px
                            color #666
                        }
                    }
                }
            }
            .swiper-pagination{
                >span.swiper-pagination-bullet-active{
                    background #02a774
                }
            }
        }
    }        
    .msite_shop_list{
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header{
            padding 10px 10px 0 10px
            .shop_icon{
                margin-left 5px
                color #999
                .shop_header_title{
                    color #999
                    font-size 14px
                    line-height 20px
                }             
            }
        }
       
    }    
</style>
