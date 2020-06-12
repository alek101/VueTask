import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersData: {},
    logedIn: false
  },
  mutations: {
    getUsers: (state, payload) => {
      state.usersData = payload
    },
    changeLoginStatus: state => {
      state.logedIn = !state.logedIn
    }
  },
  actions: {
    getUsers: async function (context) {
      const url2 = 'https://api.github.com/users?since=0>; rel="next"'
      const axios = require('axios')
      const result = await axios.get(url2)
      const modifiedResult = await result.data.map((c, i) => { c.order = i; return c })
      await context.commit('getUsers', modifiedResult)
      console.log(result, modifiedResult)
    },
    logIn: function (context) {
      if (this.state.logedIn === false) context.commit('changeLoginStatus')
    },
    logOut: function (context) {
      if (this.state.logedIn === true) context.commit('changeLoginStatus')
    }
  },
  modules: {
  }
})
