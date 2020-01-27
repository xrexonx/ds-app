import { Http } from '../_utils/http';


const API_URL = 'localhost:8080';

export function signUp(data) {
    localStorage.clear();
    setAuth(data);
    // return Http.post(`${API_URL}/signup`, data);
}

export function login(data) {
    // const { user, pass } = data;
    setAuth({
        ...data,
        fullName: 'Rexon De los Reyes'
    });
    return Promise.resolve(data);
    // return Http.post(`${API_URL}/login`, { body: JSON.stringify({ user, pass })});
}

export function logout(user) {
    localStorage.clear();
    // return Http.post(`${API_URL}/logout`, { user });
}

function setAuth(data) {
    localStorage.setItem('userAuth', JSON.stringify(data))
}

export function checkAuth() {
    return !!Object.keys(JSON.parse(localStorage.getItem('userAuth'))).length;
}