import { Storage } from '../_utils/storage'

function toArrayItems(strData) {
    let arrData = [];
    if (typeof strData === 'string') {
        arrData = strData.split('|');
    }
    return arrData;
}

export const Game = {
    save: (data) => {
        Storage.setItems('games', JSON.stringify(data));
        return Game.findByUsernameAndPassword(data.userName, data.password);
    },
    findAll: () => {
        const games = Game.getItem('games');
        return toArrayItems(games);
    },
    findByPlayerId: (pId) => {
        const game = Game.findAll().find(game => {
            const { playerId } = JSON.parse(game);
            return playerId === pId;
        });
        return JSON.parse(game);
    }
};
