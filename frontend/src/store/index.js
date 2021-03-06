import Vue from 'vue'
import Vuex from 'vuex'

// import home from './home.module'
import auth from './auth.module'
import employee from './employee.module'
import employeeList from '@/store/employeeList.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // home,
    auth,
    employee,
    employeeList
  }
})
