import Vue from "vue";
import EmployeeService from "../common/employee.service";

export const UPDATE_EMPLOYEE_IN_LIST = "updateEmployeeInList";
const FETCH_START = "fetchStart";
const FETCH_END = "fetchEnd";

const state = {
    employeeList: [],
    isLoading: true,
    employeeCount: 0
};

const getters = {
    employeeCount(state) {
        return state.employeeCount;
    },
    employeeList: state => {
        return state.employeeList;
    },
    isLoading(state) {
        return state.isLoading;
    }
};

const actions = {
    fetchEmployeeList({ commit }, params) {
        commit(FETCH_START);
        return EmployeeService.query(params.type, params.filters)
            .then(data => {
                console.log(data);
                commit(FETCH_END, data);
            })
            .catch(error => {
                throw new Error(error);
            });
    }
};

const mutations = {
    [FETCH_START](state) {
        state.isLoading = true;
    },
    [FETCH_END](state, { data }) {
        state.employeeList = data;
        state.employeeCount = data.length;
        state.isLoading = false;
    },
    [UPDATE_EMPLOYEE_IN_LIST](state, data) {
        state.employeeList = state.employeeList.map(employee => {
            if (employee.slug !== data.slug) {
                return employee;
            }
            // We could just return data, but it seems dangerous to
            // mix the results of different api calls, so we
            // protect ourselves by copying the information.
            employee.firstName = data.firstName;
            employee.lastName = data.lastName;
            return employee;
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
