// import { Http } from '../_utils/http';
import { Game } from '../_models/game';
// const API_URL = 'localhost:8080';

export function fetchPreviousGames(playerId) {
    // Commented since no Backend and use mock data
    // return Http.get(`${API_URL}/fetchPreviousGames?userId=${userId}`);
    return Game.findByPlayerId(playerId);
}

export function saveGames(data) {
    return Promise.resolve(Game.save(data));
    // return Http.post(`${API_URL}/game`, { body: JSON.stringify(data)})
}

export function getGameStatus(status) {
    return status === 1 ? 'Winner' : 'Loser';
}
