import { getUserList } from '@/api/user'

const state = {
  users: []

}

const mutations = {
  SET_USERS: (state, users) => {
    state.users = users
  }
}

const actions = {
  // get user list
  getUserList({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserList().then(data => {
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_USERS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
