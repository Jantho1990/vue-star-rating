<template>
  <div id="app">
    <h1>Vue StarRating</h1>
    <div class="star-rating-container">
      <img class="logo" src="./assets/logo.png">
      <StarRating
        :rating="rating"
        :min-rating="minRating"
        :max-rating="maxRating"
        :star-ratio="starRatio"
        :limit="limit"
      />
    </div>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 8em;
  grid-template-areas:
    "title"
    "rating"
    "input";
  max-width: 100%;
  margin: auto;
  grid-gap: 1em;
  text-align: center;
}

h1 {
  margin: auto;
  grid-area: title;
}

.star-rating-container {
  grid-area: rating;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  animation: logo-spin infinite 15s linear;
  height: 80px;
}

@keyframes logo-spin {
  0% { transform: rotateY(0deg) rotateX(0deg); }
  33% { transform: rotateY(180deg) rotateX(0deg); }
  66% { transform: rotateY(180deg) rotateX(180deg); }
  100% { transform: rotateY(360deg) rotateX(360deg); }
}

@media screen and (min-width: 768px) {
  #app {
    max-width: 768px;
    grid-gap: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
      "title title"
      "rating input";
  }
}
</style>
