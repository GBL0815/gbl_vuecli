const home = {
  state: {
    test: 'hello'
  },
  getters: {
    hello (state) {
      return `${state.test}啊`
    },
    test (state, getters) {
      return `${getters.hello}${state.test}`
    }
  },
  mutations: {
    test (state) {
      state.test = 'test'
    }
  },
  actions: {
    test (context) {
      setTimeout(() => {
        context.commit('test')
      }, 2000)
    }
  }
}

export default home
