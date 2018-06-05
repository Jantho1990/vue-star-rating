<template>
  <div class="star-rating">
    <font-awesome-icon class="star" icon="star" :key="`fs${i}`" v-for="(fs, i) in fullStars"/>
    <font-awesome-layers class="star" :key="`hs${i}`" v-for="(hs, i) in halfStars">
      <font-awesome-icon icon="star-half"/>
      <font-awesome-icon flip="horizontal" :icon="['far', 'star-half']"/>
    </font-awesome-layers>
    <font-awesome-icon class="star" :icon="['far', 'star']" :key="`es${i}`" v-for="(es, i) in emptyStars"/>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from '@fortawesome/vue-fontawesome'

fontawesome.library.add(solid, regular)

export default {
  name: 'StarRating',
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers
  },
  computed: {
    fullStars () {
      return Math.floor(this.rating / this.starRatio)
    },
    halfStars () {
      return Math.floor(this.maxStars - this.fullStars - this.emptyStars)
    },
    emptyStars () {
      return Math.floor(this.maxStars - this.rating / this.starRatio)
    },
    maxStars () {
      return Math.floor(this.maxRating / this.starRatio)
    }
  },
  created () {
    this.ratingIsValid()
  },
  methods: {
    ratingIsValid () {
      if (this.rating < this.minRating || this.rating > this.maxRating) {
        throw new Error(
          `Rating must be between ${this.minRating} and ${this.maxRating} (${this.rating}).`
        )
      }
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
      default: 0
    },
    starRatio: {
      type: Number,
      default: 2
    }
  },
  updated () {
    this.ratingIsValid()
  }
}
</script>

<style>
.star-rating {
  color: gold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.star-rating > .star {
  margin: auto 0.1em;
}
</style>
