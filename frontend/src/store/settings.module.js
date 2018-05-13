import { EmployeesService } from '@/common/api.service'
import { FETCH_EMPLOYEE } from './actions.type'
import { SET_EMPLOYEE } from './mutations.type'

export const state = {
  employee: {}
}

export const actions = {
  [FETCH_EMPLOYEE] (context, employeeSlug) {
    return EmployeesService.get(employeeSlug)
      .then(({ data }) => {
        context.commit(SET_EMPLOYEE, data.employee)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_EMPLOYEE] (state, employee) {
    state.employee = employee
  }
}

export default {
  state,
  actions,
  mutations
}
