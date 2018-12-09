<template>
  <div id="app">
    <router-view></router-view>  
    <!-- 
      v-show 或 v-if 都可以使用
      $route:代表当前路由
      meta:源数据，在router->index.js中配置一个属性值 
     -->
   <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  //注册组件
  components:{
    'footer-guide': FooterGuide,
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .app{
    width: 100%;
    height: 100%;
    background-color : #f5f5f5;
  }
</style>
