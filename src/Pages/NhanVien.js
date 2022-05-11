import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import ModalForm from './modalForm'
function NhanVien(props) {
  const listMembers = props.listStaff;
  const [keyword, setKeyWord] = useState('');
  const [curentMember, setCurrentMember] = useState(listMembers)
  const [modal,setModal] = useState(false)
  const handleSearch = () =>  {
    const filterMember = () => listMembers.filter((member) => member.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
    setCurrentMember(filterMember)
  }
  const handleOpenForm = () => {
    setModal(!modal)
  }
  useEffect(() => {
    setCurrentMember(listMembers)
  }, [listMembers]);
    return (
        <div className='container list-content'>
            <div className='NV-header row'>
              <div className='NV-header-left col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <h1 className='NV-header-left-title'>Nhân Viên</h1>
                <div onClick={handleOpenForm} className='NV-header-left-plus'><i class="fa-solid fa-circle-plus"></i></div>
              </div> 
              <div className='NV-header-right col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <input 
                  className='NV-header-right-input'
                  type="text" 
                  name='keyword' 
                  placeholder='Nhập tên nhân viên..'
                  value={keyword} 
                  onChange={(e) => setKeyWord(e.target.value)}
                />
                <button className='NV-header-right-button' onClick={handleSearch}>Tìm</button>
              </div>
            </div>
            <ul className='list-member row'>
                {
                  curentMember.map((member, index) => (
                    <li className='member col-xs-6 col-sm-6 col-md-4 col-lg-2' key={index}>
                        <div className='member-content'>
                          <Link className='link-member' to={`/NhanVien/${member.id}`}>
                            <div className='image-member'><img src={member.Image} /></div>
                            {member.name}
                          </Link>
                        </div>
                    </li>
                    ))
                }
            </ul>
            {modal && <ModalForm
              handleListStaff={props.handleListStaff}
              listMembers={listMembers} 
              handleOpenForm={handleOpenForm}
            />}
      </div>
    )
}
export default NhanVien;