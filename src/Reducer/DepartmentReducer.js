import * as ActionTypes from '../Actions/ActionTypes'

const initialDepartment = {
    listDepartment: []
}
const departmentReducer = (state = initialDepartment, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_DEPARTMENT:
            return {
                ...state,
                listDepartment: action.payload
            }
        default :
            return state
    }
}
export default departmentReducer;