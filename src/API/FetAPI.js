export function fetchData(callback) {
    fetch('https://rjs101xbackend.herokuapp.com/staffs')
        .then((rs) => rs.json())
        .then(callback)
}

export function fetchDepartment(callback) {
    fetch('https://rjs101xbackend.herokuapp.com/departments')
        .then((rs) => rs.json())
        .then(callback)
}

export function fetchApiSalary(callback) {
    fetch('https://rjs101xbackend.herokuapp.com/staffsSalary')
        .then((rs) => rs.json())
        .then(callback)
}

export function postStaff(value, callback) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(value)
    }
    fetch('https://rjs101xbackend.herokuapp.com/staffs', options)
        .then((rs) => rs.json())
        .then(callback)
}

export function deleteStaff(id, callback) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(`https://rjs101xbackend.herokuapp.com/staffs/${id}`, options)
        .then((rs) => rs.json())
        .then(callback)
}


export function patchStaff(value, callback) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(value)
    }
    fetch('https://rjs101xbackend.herokuapp.com/staffs', options)
        .then((rs) => rs.json())
        .then(callback)
}