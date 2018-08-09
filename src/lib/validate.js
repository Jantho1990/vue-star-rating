export const ratingIsValid = function (rating, minRating, maxRating) {
  if (rating >= minRating && rating <= maxRating) return true
  return false
}

export const valuesNotZeroOrLess = function (...values) {
  let filteredValues = values.filter(value => value > 0)

  return values.length === filteredValues.length
}

export const valuesNotNegative = function (...values) {
  let filteredValues = values.filter(value => value >= 0)

  return values.length === filteredValues.length
}

export const minLessThanMax = function (minRating, maxRating) {
  return minRating < maxRating
}

export const valuesLessThanHardLimit = function (limit, ...values) {
  let filteredValues = values.filter(value => value <= limit)

  return values.length === filteredValues.length
}

export default function (rating, minRating, maxRating, starRatio, limit) {
  return valuesLessThanHardLimit(limit, minRating, maxRating) &&
    valuesNotNegative(rating, minRating, maxRating) &&
    valuesNotZeroOrLess(starRatio) &&
    minLessThanMax(minRating, maxRating) &&
    ratingIsValid(rating, minRating, maxRating)
}
