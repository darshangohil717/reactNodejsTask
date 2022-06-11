import axios from 'axios';

export async function login(data) {
    return axios.post('http://localhost:3005/user/login', data)
    .then((result) => {
        const { token } = result;
        return result;
    }).catch((error) => {
        console.log(error);
        return error.response;
    })
}


export async function userList(data) {
    return axios.get('http://localhost:3005/user/get-all-users', data)
    .then((result) => {
        return result;
    }).catch((error) => {
        console.log(error);
        return error.response;
    })
}

export async function create(data) {
    return axios.post('http://localhost:3005/user/create', data)
    .then((result) => {
        return result;
    }).catch((error) => {
        console.log(error);
        return error.response;
    })
}