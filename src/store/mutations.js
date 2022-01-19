import { TEST, TEST_THREE, TEST_TWO } from './mutation-type'

export const mutationsOne = {
  [TEST] (state, payload) {
    state.one = payload
  }
}

export const mutationsTwo = {
  [TEST_TWO] (state, payload) {
    state.two = payload
  },
  [TEST_THREE] (state, data) {
    state.three = data
  }
}
