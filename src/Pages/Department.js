
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Department() {
    const listDepartments = useSelector(state => state.department.listDepartment)
   
    return (
        <ul className="list-phongBan row">
            {
                listDepartments.map((phongBan,index) => (
                    <li className="list-phongBan-item col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                            <div className="list-phongBan-item-content">
                                <Link to={`/Department/${phongBan.id}`}>
                                    <h1>{phongBan.name}</h1>
                                    <p>Số lượng nhân viên : {phongBan.numberOfStaff}</p>
                                </Link>
                            </div>
                    </li>
                ))
            }
        </ul>
    )
}
export default Department;
