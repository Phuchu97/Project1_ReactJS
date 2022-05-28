
function DepartmentChild({departments}) {
    console.log(departments);
    return (
       <ul className="list-filter-depart row">
           {
            departments.map((dep, index) => (
                <li className='member col-xs-6 col-sm-6 col-md-4 col-lg-2' key={index}>
                        <div className='member-content'>
                            <div className='image-member'><img src={`..${dep.image}`} /></div>
                            {dep.name}
                        </div>
                </li>
                
            ))
           }
       </ul>
    )
}

export default DepartmentChild;