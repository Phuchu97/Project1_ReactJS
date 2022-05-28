import { combineReducers } from "redux";
import staffReducer from "./StaffReducer";
import departmentReducer from "./DepartmentReducer";
import salarytReducer from "./SalaryReducer";
const rootReducer = combineReducers({
    staff: staffReducer,
    department: departmentReducer,
    salary: salarytReducer
})
export default rootReducer;