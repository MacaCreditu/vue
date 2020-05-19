<template>
  <div class="product">
    <div class="figure"><img :src="product.imagen" class="img-fluid"></div>
      <h2>{{ product.titulo }}</h2>
      <p>$ {{ Number(product.precio).toFixed() }}</p>
      <button class="btn btn-default">Ver detalle</button>
      <button class="btn btn-primary">Añadir al carrito</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>