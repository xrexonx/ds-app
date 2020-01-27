import { Http } from '../_utils/http';
const API_URL = 'localhost:8080';

export function fetchPreviousGames(userId) {
    // return Http.get(`${API_URL}/fetchPreviousGames?userId=${userId}`);
    return Promise.resolve(
        [
            { id: 1, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 0},
            { id: 2, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 3, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 0},
            { id: 4, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 5, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 6, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 7, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 0},
            { id: 8, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 9, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 1},
            { id: 10, date: 'Jan 27 2020 13:51:13', gameTime: '2 mins', status: 0}
        ]
    );
}

export function saveGame(data) {
    return Http.post(`${API_URL}/game`, { body: JSON.stringify(data)})
}

export function getGameStatus(status) {
    return status === 1 ? 'Winner' : 'Loser';
}