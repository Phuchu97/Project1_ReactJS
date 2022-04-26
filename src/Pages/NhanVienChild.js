import { Link } from "react-router-dom"
function NhanVienChild(props) {
    return (
        <div className="member-infor">
            <div className="member-infor-title">{<Link to="/">Nhân Viên / </Link>} {props.member.name}</div>
                <div className="member-infor-content row">
                <div className="member-infor-image col-xs-12 col-sm-12 col-md-4 col-lg-3"><img src={props.member.Image} /></div>
                    <div className="member-infor-text col-xs-12 col-sm-12 col-md-8 col-lg-9">
                        <h1 className="member-infor-text-name">{props.member.name}</h1>
                        <p>Ngày sinh : {props.member.ngaySinh}</p>
                        <p>Ngày vào công ty : {props.member.ngayVaoCongTy}</p>
                        <p>Phòng ban : {props.member.phongBan}</p>
                        <p>Ngày nghỉ hiện có : {props.member.ngayNghiHienCo}</p>
                        <p>Ngày đã làm thêm : {props.member.ngayDaLamThem}</p>
                    </div>
                </div>
        </div>
    )
}
export default NhanVienChild;


