function PhongBan ({listPhongBan}) {
    return (
        <ul className="list-phongBan row">
            {
                listPhongBan.map((phongBan,index) => (
                    <li className="list-phongBan-item col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                        <div className="list-phongBan-item-content">
                            <h1>{phongBan.name}</h1>
                            <p>Số lượng nhân viên : {phongBan.quantity}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
export default PhongBan;
