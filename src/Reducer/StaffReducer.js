
import * as ActionTypes from '../Actions/ActionTypes'


const initialStaff = {
    list: [],
    keyword: ''
}
const staffReducer = (state = initialStaff, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_STAFF: 
            return {
                ...state,
                list: action.payload
            }
        case ActionTypes.KEYWORD_FILTER:
            return {
                ...state,
                keyword: action.payload
            }
        default:
            return state
    }
}

export default staffReducer;