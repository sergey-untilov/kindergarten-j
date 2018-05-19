import Vue from 'vue'
import ApiService from '@/common/api.service'

export default {
  query (type, params) {
    return ApiService.query('employees', {params: params})
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
