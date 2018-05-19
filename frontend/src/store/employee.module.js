import Vue from 'vue'
import EmployeeService from '../common/employee.service'

const SET_EMPLOYEE = 'setEmployee'
const RESET_STATE = 'resetState'

const initialState = {
    employee: {
        firstName: '',
        lastName: '',
        position: ''
    }
}

const state = Object.assign({}, initialState)

const getters = {
    employee(state) {
        return state.employee
    }
}

const actions = {
    fetchEmployee(context, employeeSlug) {
        return EmployeeService.get(employeeSlug)
            .then(({ data }) => {
                context.commit(SET_EMPLOYEE, data.employee)
                return data
            })
    },
    createEmployee({ state }) {
        return EmployeeService.create(state.employee)
    },
    deleteEmployee(context, slug) {
        return EmployeeService.destroy(slug)
    },
    updateEmployee({ state }) {
        return EmployeeService.update(state.employee.slug, state.employee)
    },
    resetStateEmployee({ commit }) {
        commit(RESET_STATE)
    }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
    [SET_EMPLOYEE] (state, employee) {
        state.employee = employee
    },
    [RESET_STATE] () {
        for (let f in state) {
            Vue.set(state, f, initialState[f])
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
