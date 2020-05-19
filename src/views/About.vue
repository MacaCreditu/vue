<template>
  <div class="about">
    <img alt="Vue logo" class="SecondaryLogo" src="../assets/img/logo-bokko.jpg">
    <div class="SecondaryBanner"></div>
    <h1>{{ titleAbout }}</h1>
    <p>{{ textAbout }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      titleAbout:'About Bokko and Belial',
      textAbout:'We believe that kindness, gratitude and positivity are a fundamental part of life. We are your online store of gothic, rock, dark and diabolical shirts.'
    }
  }
}
</script>