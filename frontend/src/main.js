// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = 'http://localhost:3000'

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    employees: []
  },
  getters: {
    employees: state => {
      return state.employees
    }
  },
  actions: {
    getEmployees(context) {
      axios.get('/employees')
        .then((employees) => {
          context.commit('setEmployees', employees)
        })
    }
  },
  mutations: {
    setEmployees(state, employees) {
      state.employees = employees
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
