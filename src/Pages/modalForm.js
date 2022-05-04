
function ModalForm({handleOpenForm}) {
    return (
        <div className='modal-plus'>
              <div onClick={handleOpenForm} className='modal-overlay'></div>
              {/* <div className='modal-form'>
                <div className='form'>
                  <label>
                    Tên thêm mới
                    <input type="text" placeholder='Nhập thông tin..' />
                  </label>
                </div>
              </div> */}
        </div>
    )
}
export default ModalForm