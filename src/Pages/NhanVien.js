import { Link } from 'react-router-dom'
function NhanVien(props) {
    return (
        <div className='container list-content'>
            <ul className='list-member row'>
                {
                  props.listMember.map((member, index) => (
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
      </div>
    )
}
export default NhanVien;