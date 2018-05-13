import Vue from 'vue'
import { EmployeesService } from '@/common/api.service'
import {
  FETCH_EMPLOYEE,
  EMPLOYEE_PUBLISH,
  EMPLOYEE_EDIT,
  EMPLOYEE_DELETE,
  EMPLOYEE_RESET_STATE
} from './actions.type'
import {
  RESET_STATE,
  SET_EMPLOYEE,
  UPDATE_EMPLOYEE_IN_LIST
} from './mutations.type'

const initialState = {
  employee: {
    firstName: '',
    lastName: '',
    position: ''
  }
}

export const state = Object.assign({}, initialState)

export const actions = {
  [FETCH_EMPLOYEE] (context, employeeSlug, prevEmployee) {
    // avoid extronuous network call if employee exists
    if (prevEmployee !== undefined) {
      return context.commit(SET_EMPLOYEE, prevEmployee)
    }
    return EmployeesService.get(employeeSlug)
      .then(({ data }) => {
        context.commit(SET_EMPLOYEE, data.employee)
        return data
      })
  },
  [EMPLOYEE_PUBLISH] ({ state }) {
    return EmployeesService.create(state.employee)
  },
  [EMPLOYEE_DELETE] (context, slug) {
    return EmployeesService.destroy(slug)
  },
  [EMPLOYEE_EDIT] ({ state }) {
    return EmployeesService.update(state.employee.slug, state.employee)
  },
  [EMPLOYEE_RESET_STATE] ({ commit }) {
    commit(RESET_STATE)
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_EMPLOYEE] (state, employee) {
    state.employee = employee
  },
  [RESET_STATE] () {
    for (let f in state) {
      Vue.set(state, f, initialState[f])
    }
  }
}

const getters = {
  employee (state) {
    return state.employee
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
