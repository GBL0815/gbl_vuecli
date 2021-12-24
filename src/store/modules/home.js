const home = {
  state: () => ({
    text: 'hello'
  }),
  getters: {
    hello: (state) => {
      return `${state.text}啊`
    }
  },
  actions: {
    test () {
      setTimeout(() => {
        this.text = 'test'
      }, 2000)
    }
  }
}

export default home
