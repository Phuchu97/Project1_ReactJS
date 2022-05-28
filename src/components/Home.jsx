import { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Staffs from '../Pages/Staffs';
import Department from "../Pages/Department";
import Salary from '../Pages/Salary';
import Footer from '../Pages/footer';
import StaffChilds from '../Pages/StaffChilds';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData, fetchDepartment, fetchApiSalary} from '../API/FetAPI' 
import { fetchAPIStaff, fetchDpm, fetchActionSalary } from '../Actions/ActionCreator'
import DepartmentChild from '../Pages/DepartmentChild';


function HomePage() {
    const [showNav, setShowNav] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData((data) => {
            dispatch(fetchAPIStaff(data))
        })

        fetchDepartment((data) => {
            dispatch(fetchDpm(data))
        })

        fetchApiSalary((data) => {
            dispatch(fetchActionSalary(data))
        })
    }, [])
    const handleSwitchNav = () => {
        setShowNav(!showNav)
    }

    const listMembers = useSelector(state => state.staff.list)

    const StaffWithId = () => {
        let { memberId } = useParams();
        return (
        <StaffChilds member={listMembers.filter((member) => member.id === parseInt(memberId))[0]} />
        );
    };


    const FilterDepart = () => {
        let { DepID } = useParams();
        return (
        <DepartmentChild departments={listMembers.filter((member) => member.departmentId === DepID)} />
        );
    };

    return (
        <div className="HomPage">
            <nav className='nav'>
                <div onClick={handleSwitchNav} className='nav-menu'><i class="fa-solid fa-bars"></i></div>
                <ul className={`list-title ${showNav? 'show' : ''}`}>
                    <Link className='list-title-title nav-image' to="/"></Link>
                    <Link className='list-title-item' to="/">Thuyền Viên</Link>
                    <Link className='list-title-item' to="/Department">Phòng Ban</Link>
                    <Link className='list-title-item' to="/Salary">Bảng Lương</Link>
                </ul>
             </nav>
            <Routes>
                <Route  path="/" element={<Staffs />} />
                <Route path='/Staffs/:memberId' element={<StaffWithId />} />
                <Route path="/Department" element={<Department />} />
                <Route path="/Department/:DepID" element={<FilterDepart />} />
                <Route path="/Salary" element={<Salary/>} />
            </Routes>
            <Footer/>
        </div>
    )
}
export default HomePage;