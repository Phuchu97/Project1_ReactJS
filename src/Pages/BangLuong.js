function BangLuong ({listMember}) {
    return (
        <ul className="list-bangLuong row">
            {
                listMember.map((member, index) => (
                    <li className="list-bangLuong-item col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                        <div className="list-bangLuong-item-content">
                            <h1>{member.name}</h1>
                            <p>Mã nhân viên {member.maNhanVien}</p>
                            <p>Mã nhân viên {member.salaryScale}</p>
                            <p>Mã nhân viên {member.ngayDaLamThem}</p>
                            <h3>Lương : {member.salaryScale * 3000000 + member.ngayDaLamThem*200000}</h3>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
export default BangLuong;