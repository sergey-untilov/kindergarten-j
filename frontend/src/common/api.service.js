import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource, id = '') {
    return Vue.axios
      .get(`${resource}/${id}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService

export const EmployeeService = {
  query (type, params) {
    return ApiService
      .query(
        'employee' + (type === 'actual' ? '/actual' : ''),
        { params: params }
      )
  },
  get (id) {
    return ApiService.get('employee', id)
  },
  create (params) {
    return ApiService.post('employee', {employee: params})
  },
  update (id, params) {
    return ApiService.update('employee', id, {employee: params})
  },
  destroy (id) {
    return ApiService.delete(`employee/${id}`)
  }
}
