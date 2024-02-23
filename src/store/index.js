import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {
  },
  mutations: {
    toggleTheme(state) {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        state.darkMode = false
        state.vantaBg = '#f8fafc'

      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        state.darkMode = true
        state.vantaBg = '#020617'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
