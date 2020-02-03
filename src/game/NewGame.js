import React, { useEffect, useState } from 'react';
import Commentary from "./Commentary";
import { saveGames } from './services';
import { getAuthUser, logoutUser } from '../login/services';
import { Link, useHistory } from 'react-router-dom';

const NewGame = () => {

    const history = useHistory();
    const [ player, setPlayer] = useState(100);
    const [ dragon, setDragon ] = useState(100);
    const [ commentary, setCommentary ] = useState([]);
    const [ playerName, setPlayerName ] = useState('Player');
    // const [ isAuth, setAuth ] = useState(false);

    useEffect(() => {
        const { username, fullName } = getAuthUser();
        const playerName = username || fullName;
        if (playerName) {
            setPlayerName(playerName) ;
        }
    }, []);

    const generateRandom = () => {
        return Math.floor(Math.random() * 10);
    };

    const playerAttack = () => {
        const damage = generateRandom();
        const comment = `${playerName} attack the dragon by ${damage}`;
        setDragon(dragon - damage);
        setCommentary([comment, ...commentary]);
    };

    const dragonAttack = () => {
        const damage = generateRandom();
        const comment = `Dragon attack the player by ${damage}`;
        setPlayer(player - damage);
        setCommentary([comment, ...commentary]);
    };

    const attack = async () => {
        await playerAttack();
        await dragonAttack();

        checkLife();
    };

    const blast = () => {
        playerAttack();
    };

    const heal = async () => {
        if (player < 100) {
            await dragonAttack();
            const life = generateRandom();
            setPlayer(player + life);
        }
    };

    const giveUp = async () => {
        await saveGame(0);
        history.push('/gameList');
    };


    const checkLife = async () => {
        if (dragon <= 0) {
            alert('You win');
            await saveGame(1);
        }
        if (player <= 0) {
            alert('You lose');
            await saveGame(0);
        }
    };

    const saveGame = async (status) => {
        const data = { status, playerId: getAuthUser().id };
        const saveGameResponse = await saveGames(data);
        if (saveGameResponse) {
            history.push('/gameList');
        }
    };

    const logout = () => {
        logoutUser();
        history.push('/');
    };

    return (
        <div className="mdl-layout__content">
            <div className="mdl-grid mdl-cell--12-col">
                <div className="mdl-cell mdl-cell--6-col">
                    <h2 className="mdl-card__title-text">New Game</h2>
                </div>
                <div className="mdl-layout-spacer"/>
                <div className="mdl-cell mdl-cell--6-col">
                    <Link to="/gameList" className="mdl-button mdl-js-button">
                        Previous Games
                    </Link>
                    <button
                        onClick={logout}
                        className="mdl-button mdl-js-button">
                        Logout
                    </button>
                </div>
            </div>
            <div className="mdl-grid">
                <div className="mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                    <div className="mdl-grid mdl-cell--12-col">
                        <div className="mdl-cell mdl-cell--6-col">
                            <span>{playerName}</span>
                            <input
                                id="player-life"
                                className="mdl-slider mdl-js-slider mdl-color--teal-300"
                                type="range"
                                min="0"
                                max="100"
                                value={player}
                            />
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <span>Dragon</span>
                            <input
                                id="dragon-life"
                                className="mdl-slider mdl-js-slider mdl-color--red-300"
                                type="range"
                                min="0"
                                max="100"
                                value={dragon}
                            />
                        </div>
                    </div>
                    <div className="action-buttons">
                        <div className="mdl-grid mdl-cell--12-col">
                            <div className="mdl-cell mdl-cell--3-col">
                                <button onClick={attack} className="mdl-button mdl-js-button mdl-button--raised">
                                    Attack
                                </button>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col">
                                <button onClick={blast} className="mdl-button mdl-js-button mdl-button--raised">
                                    Blast
                                </button>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col">
                                <button onClick={heal} className="mdl-button mdl-js-button mdl-button--raised">
                                    Heal
                                </button>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col">
                                <button onClick={giveUp} className="mdl-button mdl-js-button mdl-button--raised">
                                    Give up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Commentary commentary={commentary}/>
            </div>
        </div>
    );
};

export default NewGame;
