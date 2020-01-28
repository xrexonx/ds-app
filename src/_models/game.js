import { Storage } from '../_utils/storage'

function toArrayItems(strData) {
    let arrData = [];
    if (typeof strData === 'string') {
        arrData = strData.split('|');
    }
    return arrData.map(data => JSON.parse(data));
}

function generateId() {
    return Math.floor(Math.random() * 10000);
}

export const Game = {
    save: (data) => {
        const gameId = generateId();
        Storage.setItems('games', JSON.stringify({ id: gameId, date: new Date(), ...data}));
        return Game.findByPlayerId(gameId);
    },
    findAll: () => {
        const games = Storage.getItem('games');
        return toArrayItems(games);
    },
    findByPlayerId: (pId) => {
        return Game.findAll().filter(({playerId}) => playerId === pId);
    }
};
