import { useSelector } from "react-redux";

function Salary () {

    const listSalary = useSelector(state => state.salary.listSalary)
    return (
        <ul className="list-bangLuong row">
            {
                listSalary.map((member, index) => (
                    <li className="list-bangLuong-item col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                        <div className="list-bangLuong-item-content">
                            <h1>{member.name}</h1>
                            <p>Mã nhân viên : </p>
                            <p>Hệ số lương : {member.salaryScale}</p>
                            <p>Ngày đã làm thêm : {member.overTime}</p>
                            <h3>Lương : {member.salaryScale * 3000000 + member.overTime*200000}</h3>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
export default Salary;