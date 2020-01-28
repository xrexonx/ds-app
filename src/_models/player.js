import { Storage } from '../_utils/storage';

function toArrayItems(strData) {
    let arrData = [];
    if (typeof strData === 'string') {
        arrData = strData.split('|');
    }
    return arrData;
}

function generateId() {
    return Math.floor(Math.random() * 10000);
}

export const Player = {
    save: (data) => {
        Storage.setItems('players', JSON.stringify({ id: generateId(), ...data}));
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
