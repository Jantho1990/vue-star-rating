<template>
  <div class="rating-inputs">
    <input type="number" v-model="rating_" :min="minRating_" :max="maxRating_">
    <input type="number" v-model="minRating_">
    <input type="number" v-model="maxRating_">
    <input type="number" v-model="starRatio_">
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating_: this.rating,
      minRating_: this.minRating,
      maxRating_: this.maxRating,
      starRatio_: this.starRatio
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
    }
  }
}
</script>

<style>

</style>
