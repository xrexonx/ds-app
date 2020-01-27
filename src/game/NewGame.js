import React, { Component } from 'react';
import Commentary from "./Commentary";
import { saveGame } from './services'

class NewGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: 100,
            dragon: 100,
            commentary: []
        }
    }

    generateRandom = () => {
        return Math.floor(Math.random() * 10);
    };

    playerAttack = () => {
        const damage = this.generateRandom();
        const { dragon, commentary } = this.state;
        const comment = `Player attack the dragon by ${damage}`;
        this.setState({
            dragon: dragon - damage,
            commentary: [comment, ...commentary]
        });
    };

    dragonAttack = () => {
        const damage = this.generateRandom();
        const { player, commentary } = this.state;
        const comment = `Dragon attack the player by ${damage}`;
        this.setState({
            player: player - damage,
            commentary: [comment, ...commentary]
        });
    };

    attack = async () => {
        await this.playerAttack();
        await this.dragonAttack();

        this.checkLife();
    };

    checkLife() {
        let status;
        const { player, dragon } = this.state;
        if (dragon <= 0) {
            alert('You win');
            status = 1
        }
        if (player <= 0) {
            alert('You lose');
            status = 0;
        }
        // this.saveGame(status);
    }

    blast = () => {
        this.playerAttack();
    };

    heal = async () => {
        const { player } = this.state;
        if (player < 100) {
            await this.dragonAttack();
            const life = this.generateRandom();
            this.setState({
                player: player + life
            });
        }
    };

    giveUp() {
        // this.saveGame(0);
    }

    async saveGame(status) {
        const data = {
            status,
            gameTime: '',
            playerId: 1
        };
        const saveGameResponse = await saveGame(data);
        if (saveGameResponse) {
            // Redirect to game list
        }
    }

    render() {
        const { player, dragon, commentary } = this.state;
        return (
            <main className="mdl-layout__content">
                <div className="mdl-grid">
                    <h4>New Game</h4>
                </div>
                <div className="mdl-grid">
                    <div className="mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                        <div className="mdl-grid mdl-cell--12-col">
                            <div className="mdl-cell mdl-cell--6-col">
                                <span>Player Name</span>
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
                                    <button onClick={this.attack} className="mdl-button mdl-js-button mdl-button--raised">
                                        Attack
                                    </button>
                                </div>
                                <div className="mdl-cell mdl-cell--3-col">
                                    <button onClick={this.blast} className="mdl-button mdl-js-button mdl-button--raised">
                                        Blast
                                    </button>
                                </div>
                                <div className="mdl-cell mdl-cell--3-col">
                                    <button onClick={this.heal} className="mdl-button mdl-js-button mdl-button--raised">
                                        Heal
                                    </button>
                                </div>
                                <div className="mdl-cell mdl-cell--3-col">
                                    <button onClick={this.giveUp} className="mdl-button mdl-js-button mdl-button--raised">
                                        Give up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Commentary commentary={commentary}/>
                </div>
            </main>
        );
    }
}

export default NewGame;