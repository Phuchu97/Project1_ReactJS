import * as ActionTypes from '../Actions/ActionTypes'

const initialSalary = {
    listSalary: []
}
const salarytReducer = (state = initialSalary, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_SALARY:
            return {
                ...state,
                listSalary: action.payload
            }
        default :
            return state
    }
}
export default salarytReducer;