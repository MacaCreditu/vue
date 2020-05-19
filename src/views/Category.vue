<template>
  <div class="category">
    <img alt="Vue logo" class="PrimaryLogo" src="../assets/img/logo-bokko.jpg">
    <CategoryNav/>
    <div class="ThirdBanner"></div>
    <h1><span class="FirstLetter">{{ $route.params.id }}</span></h1>

    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="prod in products" :key="prod.id">
          <product :product="prod"></product>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CategoryNav from '@/components/CategoryNav.vue'
import Product from '@/components/Product.vue'
import products from '@/infoproducts.json'

export default {
  name: 'Category',
  data(){
    return{
      TitleCategory:'Winter Collection',
      products
    }
  },
  components: {
    CategoryNav,
    Product
  }
  
}
</script>

<style>
  
</style>
