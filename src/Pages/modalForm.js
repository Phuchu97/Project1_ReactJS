import { useState } from 'react'
function ModalForm({handleOpenForm}) {
  const [valueInput, setValueInput] = useState({
    name: '',
    dob: null,
    dayIn: null,
    department: '',
    salaryScale: null,
    dayOff: null,
    overtime: null
  })
  const handleChangeInput = (e) => {
    const nameInput = e.target.name
    console.log(nameInput);
      setValueInput({...valueInput, [nameInput]: e.target.value})
  }
    return (
        <div className='modal-plus'>
              <div className='modal-overlay'></div>
              <div className='modal-form'>
                <div className='form'>
                  <div className="form-close"><i onClick={handleOpenForm} class="fa-solid fa-xmark"></i></div>
                  <div className="form-content">
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Tên</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="text"
                        name='name'
                        value={valueInput.name}
                        onChange={handleChangeInput}
                        required />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ngày sinh</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="date"
                        value={valueInput.dob}
                        name='dob'
                        onChange={handleChangeInput}
                       />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Ngày vào công ty</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"  
                        type="date" 
                        value={valueInput.dayIn}
                        name='dayIn'
                        onChange={handleChangeInput}
                      />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Phòng ban</div>
                      <select 
                        value={valueInput.department}
                        onChange={handleChangeInput} 
                        name='department'
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
                        value={valueInput.salaryScale}
                        onChange={handleChangeInput}
                        name='salaryScale'
                      />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Số ngày nghỉ còn lại</div>
                      <input 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"
                        value={valueInput.dayOff} 
                        onChange={handleChangeInput} 
                        name='dayOff'
                        type="text" />
                    </label>
                    <label className="row">
                      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">Số ngày đã làm thêm</div>
                      <input 
                        value={valueInput.overtime} 
                        onChange={handleChangeInput} 
                        className="col-xs-12 col-sm-12 col-md-7 col-lg-7"
                        name='overtime'
                        type="text" />
                    </label>
                    <button className="btn btn-primary">Thêm mới</button>
                  </div>
                </div>
              </div>
        </div>
    )
}
export default ModalForm