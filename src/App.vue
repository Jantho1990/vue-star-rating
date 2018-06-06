<template>
  <div id="app">
    <img src="./assets/logo.png">
    <StarRating :rating="14" :star-ratio="4" :max-rating="20"/>
  </div>
</template>

<script>
import StarRating from './components/StarRating'

export default {
  name: 'App',
  components: {
    StarRating
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
#app .star-rating {
  max-width: 10em;
  margin: auto;
}
</style>
