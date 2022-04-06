import { useState } from 'react'
import { useEffect } from 'react'
import listImages from './Images'
const listMembers = [
  {
    name: 'Monkey D.Luffy',
    ngaySinh: '01/01/1998',
    ngayVaoCongTy: '09/08/2021',
    phongBan: 'IT',
    ngayNghiHienCo: '4',
    ngayDaLamThem: '5',
    Image: listImages.luffyImage
  },
  {
    name: 'Nami',
    ngaySinh: '11/08/1998',
    ngayVaoCongTy: '09/08/2021',
    phongBan: 'IT',
    ngayNghiHienCo: '7',
    ngayDaLamThem: '9',
    Image: listImages.namiImage
  },
  {
    name: 'Nico Robin',
    ngaySinh: '15/09/1998',
    ngayVaoCongTy: '25/08/2021',
    phongBan: 'Design',
    ngayNghiHienCo: '1',
    ngayDaLamThem: '6',
    Image: listImages.robinImage
  },
  {
    name: 'Vinsmoke Sanji',
    ngaySinh: '17/07/2002',
    ngayVaoCongTy: '15/02/2022',
    phongBan: 'Tester',
    ngayNghiHienCo: '3',
    ngayDaLamThem: '6',
    Image: listImages.sanjiImage
  },
  {
    name: 'Zoro',
    ngaySinh: '24/05/2001',
    ngayVaoCongTy: '16/02/2019',
    phongBan: 'Brse',
    ngayNghiHienCo: '4',
    ngayDaLamThem: '5',
    Image: listImages.zoroImage
  }
];
function App() {
  const [infor, setInfor] = useState('post')
  return (
    <div className="App">
      <header>Ứng dụng quản lý nhân sự v1.0</header>
      <div className='container'>
        <ul className='list-member row'>
          {
            listMembers.map((member, index) => (
              <li onClick={() => {
                let getNote = document.querySelector('.note')
                let getInfor = document.querySelector('.infor')
                getNote.style.display = 'none'
                getInfor.style.display = 'block'
                setInfor(member)
              }} className='member col-lg-5' key={index}>
                {member.name}
              </li>
            ))
          }
        </ul>
        <p className='note'>Bấm vào để xem thông tin nhân viên.</p>
        <div className='infor'>
          <img src={infor.Image} />
          <h1>{infor.name}</h1>
          <p>Ngày vào sinh : {infor.ngaySinh}</p>
          <p>Ngày vào công ty : {infor.ngayVaoCongTy}</p>
          <p>Phòng ban : {infor.phongBan}</p>
          <p>Số ngày nghỉ còn lại : {infor.ngayNghiHienCo}</p>
          <p>Số ngày đã làm thêm : {infor.ngayDaLamThem}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
