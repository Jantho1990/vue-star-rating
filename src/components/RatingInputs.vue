<template>
  <div class="rating-inputs">
    <label for="rating">Rating</label>
    <input
      name="rating"
      type="number"
      @input="handleRating"
      v-model="rating_"
      :min="minRating_"
      :max="maxRating_"
    />

    <label for="minRating">Min Rating</label>
    <input
      name="minRating"
      type="number"
      @input="handleRating"
      v-model="minRating_"
      :min="0"
      :max="limit_"
    />

    <label for="maxRating">Max Rating</label>
    <input
      name="maxRating"
      type="number"
      @input="handleRating"
      v-model="maxRating_"
      :min="0"
      :max="limit_"
    />

    <label for="starRatio">Star Ratio</label>
    <input
      name="starRatio"
      type="number"
      @input="handleRating"
      v-model="starRatio_"
    />
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
    anyAreEmpty (...values) {
      return values.filter(value => value === '').length > 0
    },
    handleRating () {
      let {
        rating_,
        minRating_,
        maxRating_,
        starRatio_,
        limit_
      } = this

      if (this.anyAreEmpty(rating_, minRating_, maxRating_, starRatio_)) return

      rating_ = Number(rating_)
      minRating_ = Number(minRating_)
      maxRating_ = Number(maxRating_)
      starRatio_ = Number(starRatio_)

      if (inputIsValid(rating_, minRating_, maxRating_, starRatio_, limit_)) {
        this.$emit('rating-update', {
          rating: rating_,
          minRating: minRating_,
          maxRating: maxRating_,
          starRatio: starRatio_
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
.rating-inputs {
  grid-area: input;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  text-align: left;
  margin: auto;
}

.rating-inputs input {
  margin: auto;
}

.rating-inputs label {
  margin: auto 0;
}
</style>
