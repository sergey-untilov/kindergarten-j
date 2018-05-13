import {
  EmployeesService
} from '@/common/api.service'
import {
  FETCH_EMPLOYEES
} from './actions.type'
import {
  FETCH_START,
  FETCH_END,
  UPDATE_EMPLOYEE_IN_LIST
} from './mutations.type'

const state = {
  employees: [],
  isLoading: true,
  employeesCount: 0
}

const getters = {
  employeesCount (state) {
    return state.employeesCount
  },
  employees (state) {
    return state.employees
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  [FETCH_EMPLOYEES] ({ commit }, params) {
    commit(FETCH_START)
    return EmployeesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [FETCH_END] (state, { employees, employeesCount }) {
    state.employees = employees
    state.employeesCount = employeesCount
    state.isLoading = false
  },
  [UPDATE_EMPLOYEE_IN_LIST] (state, data) {
    state.employees = state.employees.map((employee) => {
      if (employee.slug !== data.slug) { return employee }
      // We could just return data, but it seems dangerous to
      // mix the results of different api calls, so we
      // protect ourselves by copying the information.
      employee.firstName = data.firstName
      employee.lastName = data.lastName
      return employee
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
