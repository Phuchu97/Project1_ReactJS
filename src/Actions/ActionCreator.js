import * as ActionTypes from './ActionTypes'


// Staffs
export const addNewStaff = (staff) => {
    return {
        type: ActionTypes.ADD_STAFF,
        payload: staff
    }
}

export const editStaff = (staff) => {
    return {
        type: ActionTypes.EDIT_STAFF,
        payload: staff
    }
}

export const deleteStaff = (staff) => {
    return {
        type: ActionTypes.DELETE_STAFF,
        payload: staff
    }
}

export const fetchAPIStaff = (data) => {
    return {
        type: ActionTypes.FETCH_STAFF,
        payload: data
    }
}

export const filterStaff = (data) => {
    return {
        type: ActionTypes.KEYWORD_FILTER,
        payload: data
    }
}



// Department
export const fetchDpm = (data) => {
    return {
        type: ActionTypes.FETCH_DEPARTMENT,
        payload: data
    }
}




// Salary
export const fetchActionSalary = (data) => {
    return {
        type: ActionTypes.FETCH_SALARY,
        payload: data
    }
}

