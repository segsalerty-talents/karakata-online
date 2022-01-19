import { TEST } from './mutation-type'

export const actionsOne = {
  testOne ({ commit }, data) {
    commit(TEST, data)
  }
}
