import { useFormik } from 'formik'
import * as Yup from 'yup'
import listImages from '../Images'
function ModalForm({ handleListStaff,listMembers, handleOpenForm }) {
  const formik = useFormik({
    initialValues: {
      id: listMembers.length,
      name: '',
      ngaySinh: "",
      ngayVaoCongTy: "",
      phongBan: '',
      ngayNghiHienCo: 0,
      ngayDaLamThem: 0,
      Image: listImages.robinImage,
      salaryScale: 1
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Không được để trống").min(4, "Ít nhất 4 ký tự").max(30, "Điền không quá 30 ký tự"),
        ngaySinh: Yup.string().required("Không được để trống").matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, "Yêu cầu nhập"),
        ngayVaoCongTy: Yup.string().required("Không được để trống").matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, "Yêu cầu nhập"),
        ngayNghiHienCo: Yup.string().required("Không được để trống").matches(/^[0-9]+$/, "Nội dung phải bằng chữ số")
    }),
    onSubmit: (values) => {
      handleListStaff(values)
      handleOpenForm()
    }
  })
    return (
        <div className='modal-plus'>
              <div className='modal-overlay'></div>
              <div className='modal-form'>
                <div className='form'>
                  <div className="form-close">
                    <h1 className='form-close-title'>Thêm Nhân Viên</h1>
                    <div className='form-close-icon'><i onClick={handleOpenForm} class="fa-solid fa-xmark"></i></div>
                  </div>
                  <form className="form-content" onSubmit={formik.handleSubmit} >
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Tên</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="text"
                        id='name'
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
                        name='ngaySinh'
                        id='ngaySinh'
                        value={formik.values.ngaySinh}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                       />
                      {formik.errors.ngaySinh && formik.touched.ngaySinh && <span className='erros-message'>{formik.errors.ngaySinh}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ngày vào công ty</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="date" 
                        value={formik.values.ngayVaoCongTy}
                        name='ngayVaoCongTy'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.ngayVaoCongTy && formik.touched.ngayVaoCongTy && <span className='erros-message'>{formik.errors.ngayVaoCongTy}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Phòng ban</div>
                      <select 
                        value={formik.values.phongBan}
                        onChange={formik.handleChange} 
                        name='phongBan'
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
                        value={formik.values.ngayNghiHienCo} 
                        onChange={formik.handleChange} 
                        name='ngayNghiHienCo'
                        type="text" />
                      {formik.errors.ngayNghiHienCo && <span className='erros-message'>{formik.errors.ngayNghiHienCo}</span>}
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Số ngày đã làm thêm</div>
                      <input 
                        value={formik.values.ngayDaLamThem} 
                        onChange={formik.handleChange} 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"
                        name='ngayDaLamThem'
                        type="text" />
                    </label>
                    <input type='submit' value="Thêm mới" />
                  </form>
                </div>
              </div>
        </div>
    )
}
export default ModalForm