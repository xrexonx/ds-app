import { Storage } from '../_utils/storage';

function toArrayItems(strData) {
    let arrData = [];
    if (typeof strData === 'string') {
        arrData = strData.split('|');
    }
    return arrData;
}

export const Player = {
    save: (data) => {
        Storage.setItems('players', JSON.stringify(data));
        return Player.findByUsernameAndPassword(data.userName, data.password);
    },
    findAll: () => {
        const players = Storage.getItem('players');
        return toArrayItems(players);
    },
    findByUsernameAndPassword: (uName, pass) => {
        const player = Player.findAll().find(player => {
            const { userName, password } = JSON.parse(player);
            return userName === uName && password === pass;
        });
        return player ? JSON.parse(player) : {};
    }
};
