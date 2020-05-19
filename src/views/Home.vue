<template>
  <div class="home">
    <img alt="Vue logo" class="PrimaryLogo" src="../assets/img/logo-bokko.jpg">
    <CategoryNav/>
    <HelloWorld PrimaryTitle="Winter Collection"/>
    <NewProducts NewTitle="What's New"/>
    <FeaturedProducts FeaturedTitle="Featured Products"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryNav from '@/components/CategoryNav.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import NewProducts from '@/components/NewProducts.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'

export default {
  name: 'Home',
  components: {
    CategoryNav,
    HelloWorld,
    NewProducts,
    FeaturedProducts
  }
}
</script>

<style>

</style>
