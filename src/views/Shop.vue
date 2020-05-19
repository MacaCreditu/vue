<template>
  <div class="shop">
    <img alt="Vue logo" class="PrimaryLogo" src="../assets/img/logo-bokko.jpg">
    <CategoryNav/>
    <div class="ThirdBanner"></div>
    <h1>{{ TitleShop }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryNav from '@/components/CategoryNav.vue'

export default {
  name: 'Shop',
  data(){
    return{
      TitleShop:'New Collection'
    }
  },
  components: {
    CategoryNav
  }
}
</script>

