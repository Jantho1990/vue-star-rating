import Vue from 'vue'
import StarRating from '@/components/StarRating'

let App, vm
beforeAll(() => {
  App = Vue.extend(StarRating)
  vm = new App().$mount()
})

describe('StarRating', () => {
  it('works', () => {
    expect(1).toBe(1)
  })

  it('should be rated at 5 stars', () => {
    vm.rating = 10
    expect(vm.fullStars).toBe(5)
  })

  it('should be rated at 2.5 stars', () => {
    vm.rating = 5
    expect(vm.fullStars).toBe(2)
    expect(vm.emptyStars).toBe(2)
    expect(vm.halfStars).toBe(1)
  })

  describe('starRatio 4, maxRating 20', () => {
    it('should be rated at 2 stars', () => {
      vm.starRatio = 4
      vm.maxRating = 20
      vm.rating = 9
      expect(vm.fullStars).toBe(2)
      expect(vm.emptyStars).toBe(3)
      expect(vm.halfStars).toBe(0)
    })
  })
})
