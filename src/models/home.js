const model = {
  namespace: 'home',
  state: {
    name: 'home'
  },
  subscriptions: {},
  effects: {
    *test({ payload, callback }, { put, call }) {
      yield put ({
        type: 'testDva'
      })
    }
  },
  reducers: {
    testDva(state) {
      return {
        ...state,
        name: 'testDva'
      }
    }
  }
}

export default model
