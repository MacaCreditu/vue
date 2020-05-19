<template>
  <div class="featured">
    <h2>{{ FeaturedTitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProducts',
  props: {
    FeaturedTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
