import { Http } from '../_utils/http';
import { Player } from '../_models/player';
import { Storage } from '../_utils/storage';
const API_URL = 'localhost:8765';

export function signUpUser(data) {
    return Promise.resolve(Player.save(data));
    // return Http.post(`${API_URL}/sigUp`, { body: JSON.stringify(data)});

}

export function loginUser({ username, password }) {
    return Promise.resolve(Player.findByUsernameAndPassword(username, password));
    // return Http.post(`${API_URL}/login`, { body: JSON.stringify({ user, pass })});
}

export function logoutUser() {
    Storage.remove('userAuth');
}

export function setAuth(data) {
    Storage.setItem('userAuth', JSON.stringify(data));
}

export function getAuthUser() {
    const authUser = Storage.getItem('userAuth') || '{}';
    return JSON.parse(authUser);
}

export function checkAuth() {
    return !!Object.keys(getAuthUser()).length;
}
