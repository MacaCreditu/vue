<template>
  <div>
    <ul>
      <li><router-link to="/category/men">Men</router-link></li>
      <li><router-link to="/category/women">Women</router-link></li>
      <li><router-link to="/category/tanks">Tanks</router-link></li>
      <li><router-link to="/category/hoddies">Hoddies</router-link></li>
    </ul>
  </div>
</template>

<script>
export default { 
  name: 'CategoryNav',
  data: function () {
  return {
    ax:'ax'
    }
  },
  props: {
    UrlsChange: []
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0; 
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
}
</style>
