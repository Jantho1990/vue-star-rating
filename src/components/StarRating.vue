<template>
  <div class="star-rating">
    <font-awesome-icon
      class="star"
      icon="star"
      :key="`fs${i}`"
      v-for="(fs, i) in fullStars"
    />

    <font-awesome-layers
      class="star"
      :key="`hs${i}`"
      v-for="(hs, i) in halfStars"
    >
      <font-awesome-icon icon="star-half"/>
      <font-awesome-icon
        flip="horizontal"
        :icon="['far', 'star-half']"
      />
    </font-awesome-layers>

    <font-awesome-icon
      class="star"
      :icon="['far', 'star']"
      :key="`es${i}`"
      v-for="(es, i) in emptyStars"
    />
  </div>
</template>

<script>
import ratingIsValid from '../lib/validate'
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from '@fortawesome/vue-fontawesome'

export default {
  name: 'StarRating',
  beforeMount () {
    let {rating, minRating, maxRating, starRatio, limit} = this
    if (!ratingIsValid(rating, minRating, maxRating, starRatio, limit)) {
      throw new Error(
        `Illegal rating values detected. You should check your initial App state. (rating: ${rating}, minRating: ${minRating}, maxRating: ${maxRating}, starRatio: ${starRatio}, limit: ${limit})`
      )
    }
  },
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  },
  computed: {
    fullStars () {
      let { rating, starRatio } = this
      return Math.floor(rating / starRatio)
    },
    halfStars () {
      let { rating, starRatio } = this
      let x = rating % starRatio
      let i = (1 / 2) * starRatio
      return x >= i ? 1 : 0
    },
    emptyStars () {
      return this.maxStars - this.fullStars - this.halfStars
    },
    maxStars () {
      let { maxRating, starRatio } = this
      return Math.ceil(maxRating / starRatio)
    }
  },
  props: {
    minRating: {
      type: Number,
      default: 0
    },
    maxRating: {
      type: Number,
      default: 10
    },
    rating: {
      type: Number,
      default: 5
    },
    starRatio: {
      type: Number,
      default: 2
    },
    limit: {
      type: Number,
      default: 1000
    }
  }
}
</script>

<style>
.star-rating > .star {
  color: gold;
  max-width: 10em;
  margin: auto;
}
</style>
