import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';
import ModalForm from './ModalForm'
import ModalEditStaffForm from './ModalEditStaffForm.';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIStaff, filterStaff } from '../Actions/ActionCreator'
import { deleteStaff } from '../API/FetAPI'



function Staffs() {
  const listMembers = useSelector(state => state.staff.list)

  const keyword = useSelector(state => state.staff.keyword)

  const dispatch = useDispatch()

  const [modal,setModal] = useState(false)

  const [modalEdit, setModalEdit] = useState(false)

  const [currentID, setCurrentID] = useState('')

  const handleSearch = () => {
    const filterMember = listMembers.filter((member) => member.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
    dispatch(fetchAPIStaff(filterMember))
  }

  const handleOpenForm = () => {
    setModal(!modal)
  }

  const handleDelete = (id) => {
    const callbackPostForm = (data) => {
      dispatch(fetchAPIStaff(data))
    }
    deleteStaff(id, callbackPostForm)
  }



  const handleOpenEditForm = (id) => {
      setModalEdit(!modalEdit)
      setCurrentID(id)
  }


    return (
        <div className='container list-content'>
            <div className='NV-header row'>
              <div className='NV-header-left col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <h1 className='NV-header-left-title'>Nhân Viên</h1>
                <motion.div
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  onClick={handleOpenForm}
                  className='NV-header-left-plus'>
                  <i class="fa-solid fa-circle-plus"></i>
                </motion.div>
              </div> 
              <div className='NV-header-right col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <input 
                  className='NV-header-right-input'
                  type="text" 
                  name='keyword' 
                  placeholder='Nhập tên nhân viên..'
                  value={keyword} 
                  onChange={(e) => dispatch(filterStaff(e.target.value))}
                />
                <button className='NV-header-right-button' onClick={handleSearch}>Tìm</button>
              </div>
            </div>
            <ul className='list-member row'>
                {
                  listMembers.map((member, index) => (
                    <li className='member col-xs-6 col-sm-6 col-md-4 col-lg-2' key={index}>
                        <div className='member-content'>
                          <Link className='link-member' to={`/Staffs/${member.id}`}>
                            <div className='image-member'><img src={`..${member.image}`} /></div>
                            {member.name}
                          </Link>
                          <div className='function-member'>
                            <div className='function-member-left'>
                              <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={() => handleDelete(member.id)} 
                                className='function-member-delete'>
                                Delete
                              </motion.button>
                            </div>
                            <div className='function-member-right'>
                              <motion.button 
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className='function-member-edit' 
                                onClick={() => handleOpenEditForm(member.id)}>
                                Edit
                              </motion.button>
                            </div>
                          </div>
                        </div>
                    </li>
                    ))
                }
            </ul>
            {modal && <ModalForm
              listMembers={listMembers} 
              handleOpenForm={handleOpenForm}
            />}

            {modalEdit && <ModalEditStaffForm currentID={currentID} handleOpenEditForm={handleOpenEditForm}/>}
      </div>
    )
}
export default Staffs;