export const state = () => ({
  username: '',
  day: '',
  month: '',
  year: '',
  time: '',
  chart: ''
})

export const getters = {
  getChartState (state) {
    return state.getChartState
  }
}

export const mutations = {
  setUsername (state, value) {
    state.username = value
  },
  setDay (state, value) {
    state.day = value
  }
}

export const actions = {
  fetchChart ({ state }) {
    // make request
    const res = { data: 10 }
    state.chart = res.data
    return res.data
  }
}
