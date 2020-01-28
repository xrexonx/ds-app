import { Http } from '../_utils/http';
import { Player } from '../_models/player';
import { Storage } from '../_utils/storage';
const API_URL = 'localhost:8765';

export function signUpUser(data) {

    console.log({data});

    return Promise.resolve(Player.save(data));

    // return Http.post(`${API_URL}/signup`, data);
}

export function loginUser(data) {
    // const { user, pass } = data;
    setAuth({
        ...data,
        fullName: 'Rexon De los Reyes'
    });
    return Promise.resolve(data);
    // return Http.post(`${API_URL}/login`, { body: JSON.stringify({ user, pass })});
}

export function logoutUser() {
    Storage.clear();
}

export function setAuth(data) {
    Storage.setItem('userAuth', JSON.stringify(data));
}

export function getAuthUser() {
    const authUser = localStorage.getItem('userAuth') || '{}';
    return JSON.parse(authUser);
}

export function checkAuth() {
    return !!Object.keys(getAuthUser()).length;
}
