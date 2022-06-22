import { useEffect, useState } from "react";



function Main() {

    const [api, setAPI] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(rs => rs.json())
            .then((data) => {
                setAPI(data)
            })
    }, [])

    
    return(
        <div>
            <h1>{api.title}</h1>
            đâsdasdas
        </div>
    )
}

export default Main;