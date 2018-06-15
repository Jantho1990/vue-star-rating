<template>
  <div class="rating-inputs">
    <input type="number" @change="handleRating" v-model="rating_" :min="minRating_" :max="maxRating_">
    <input type="number" @change="handleRating" v-model="minRating_">
    <input type="number" @change="handleRating" v-model="maxRating_">
    <input type="number" @change="handleRating" v-model="starRatio_">
  </div>
</template>

<script>
import inputIsValid from '../lib/validate'

export default {
  data () {
    return {
      rating_: this.rating,
      minRating_: this.minRating,
      maxRating_: this.maxRating,
      starRatio_: this.starRatio,
      limit_: this.limit
    }
  },
  methods: {
    handleRating () {
      let {
        rating_,
        minRating_,
        maxRating_,
        starRatio_,
        limit_
      } = this

      if (inputIsValid(rating_, minRating_, maxRating_, starRatio_, limit_)) {
        this.$emit('rating-update', {
          rating: Number(rating_),
          minRating: Number(minRating_),
          maxRating: Number(maxRating_),
          starRatio: Number(starRatio_)
        })
      }
    }
  },
  props: {
    rating: {
      type: Number,
      default: 5
    },
    minRating: {
      type: Number,
      default: 0
    },
    maxRating: {
      type: Number,
      default: 10
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

</style>
