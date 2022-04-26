import { Routes, Route, Link, useParams } from 'react-router-dom';
import NhanVien from "./Pages/NhanVien";
import PhongBan from "./Pages/PhongBan";
import BangLuong from "./Pages/BangLuong";
import listImages from './Images';
import Footer from './Pages/footer';
import { listMembers } from './Pages/listMember'
import { listPhongBan } from './Pages/listPhongBan';
import NhanVienChild from './Pages/NhanVienChild';
function App() {
  const StaffWithId = () => {
    let { memberId } = useParams();
    return (
      <NhanVienChild member={listMembers.filter((member) => member.id === parseInt(memberId))[0]} />
    );
  };
  return (
    <div className="App">
      <nav className='nav'>
        <ul className='list-title'>
          <Link className='list-title-title' to="/"><img src={listImages.imojiImage} /></Link>
          <Link className='list-title-item' to="/">Thuyền Viên</Link>
          <Link className='list-title-item' to="/PhongBan">Phòng Ban</Link>
          <Link className='list-title-item' to="/BangLuong">Bảng Lương</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NhanVien listMember={listMembers} />} />
        <Route path='/NhanVien/:memberId' element={<StaffWithId />} />
        <Route path="/PhongBan" element={<PhongBan listPhongBan={listPhongBan}/>} />
        <Route path="/BangLuong" element={<BangLuong listMember={listMembers}/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
