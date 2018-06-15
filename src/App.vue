<template>
  <div id="app">
    <img src="./assets/logo.png">
    <StarRating
      :rating="rating"
      :min-rating="minRating"
      :max-rating="maxRating"
      :star-ratio="starRatio"
      :limit="limit"
    />
    <RatingInputs
      :rating="rating"
      :min-rating="minRating"
      :max-rating="maxRating"
      :star-ratio="starRatio"
      :limit="limit"
      @rating-update="handleRatingUpdate"
    />
  </div>
</template>

<script>
import StarRating from './components/StarRating'
import RatingInputs from './components/RatingInputs'

export default {
  name: 'App',
  components: {
    StarRating,
    RatingInputs
  },
  data () {
    return {
      rating: 5,
      minRating: 0,
      maxRating: 10,
      starRatio: 2,
      limit: 1000
    }
  },
  methods: {
    handleRatingUpdate (data) {
      let {
        rating,
        minRating,
        maxRating,
        starRatio
      } = data
      this.rating = rating
      this.minRating = minRating
      this.maxRating = maxRating
      this.starRatio = starRatio
    }
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
