import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { patchStaff } from '../API/FetAPI'
import { fetchAPIStaff } from '../Actions/ActionCreator'
import { motion } from 'framer-motion'

function ModalEditStaffForm({ currentID, handleOpenEditForm }) {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      id: currentID,
      dob: '',
      startDate: '',
      departmentId: '',
      annualLeave: 0,
      overTime: 0,
      image: require('../assets/images/alberto.png'),
      salaryScale: 1
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Không được để trống").min(4, "Ít nhất 4 ký tự").max(30, "Điền không quá 30 ký tự"),
        dob: Yup.string().required("Không được để trống").matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, "Yêu cầu nhập"),
        startDate: Yup.string().required("Không được để trống").matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, "Yêu cầu nhập"),
        annualLeave: Yup.string().required("Không được để trống").matches(/^[0-9]+$/, "Nội dung phải bằng chữ số")
    }),
    onSubmit: (values) => {
        handleOpenEditForm()
        const callbackPatchForm = (data) => {
            dispatch(fetchAPIStaff(data))
        }
        patchStaff(values, callbackPatchForm)
    } 
  })

  const modalEditAnimation = {
    hidden: {
      x: '-100vh',
      opacity: 0
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration:  0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      x: '100vh',
      opacity: 0
    }
  }
    return (
        <div className='modal-plus'>
              <div className='modal-overlay'></div>
              <div className='modal-form '>
                <motion.div 
                variants={modalEditAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='form edit-form'>
                  <div className="form-close">
                    <h1 className='form-close-title'>Chỉnh sửa thông tin</h1>
                    <div className='form-close-icon'><i onClick={handleOpenEditForm} class="fa-solid fa-xmark"></i></div>
                  </div>
                  <form className="form-content" onSubmit={formik.handleSubmit} >
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Tên</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="text"
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         />
                      {formik.errors.name && formik.touched.name && <span className='erros-message'>{formik.errors.name}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ngày sinh</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="date"
                        name='dob'
                        id='ngaySinh'
                        value={formik.values.dob}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                       />
                      {formik.errors.dob && formik.touched.dob && <span className='erros-message'>{formik.errors.dob}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ngày vào công ty</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="date" 
                        value={formik.values.startDate}
                        name='startDate'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.startDate && formik.touched.startDate && <span className='erros-message'>{formik.errors.startDate}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Phòng ban</div>
                      <select 
                        value={formik.values.departmentId}
                        onChange={formik.handleChange} 
                        name='departmentId'
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <option>IT</option>
                        <option>Sale</option>
                        <option>Brse</option>
                        <option>Marketing</option>
                      </select>
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Hệ số lương</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="text" 
                        value={formik.values.salaryScale}
                        onChange={formik.handleChange}
                        name='salaryScale'
                        placeholder='1.0 -> 3.0'
                      />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Số ngày nghỉ còn lại</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"
                        value={formik.values.annualLeave} 
                        onChange={formik.handleChange} 
                        name='annualLeave'
                        type="text" />
                      {formik.errors.annualLeave && <span className='erros-message'>{formik.errors.annualLeave}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Số ngày đã làm thêm</div>
                      <input 
                        value={formik.values.overTime} 
                        onChange={formik.handleChange} 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"
                        name='overTime'
                        type="text" />
                    </label>
                    <input type='submit' value="Chỉnh lại" />
                  </form>
                </motion.div>
              </div>
        </div>
    )
}
export default ModalEditStaffForm