// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import { CHECK_AUTH } from '@/store/actions.type'
import ApiService from '@/common/api.service'
import DateFilter from '@/common/date.filter'
import ErrorFilter from '@/common/error.filter'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

ApiService.init();

//Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    return Promise
      .all([store.dispatch(CHECK_AUTH)])
      .then(next)
  },
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
