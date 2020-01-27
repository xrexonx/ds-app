import React, { Component } from 'react';
import {fetchPreviousGames, getGameStatus} from './services';
import { Link } from 'react-router-dom';
import GameItem from './GameItem';

class GameList extends Component {

    fetchGames() {
        return fetchPreviousGames(1);
    }

    async componentDidMount() {
        const prevGames = await this.fetchGames();
        this.setState({ prevGames })
    }

    render() {
        const prevGames = this.state && this.state.prevGames;
        const formatted = prevGames && prevGames.map(game => {
            return {
                ...game,
                status: getGameStatus(game.status)
            }
        });
        return (
            <main className="mdl-layout__content">
                <div className="mdl-grid">
                    <h5>Previous Games</h5>
                    {/*<Link*/}
                    {/*    to="/newGame"*/}
                    {/*    className="mdl-button mdl-js-button"*/}
                    {/*>*/}
                    {/*    New Game*/}
                    {/*</Link>*/}
                </div>
                <div className="mdl-grid">
                    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                        <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">Status</th>
                            <th className="mdl-data-table__cell--non-numeric">Game time</th>
                            <th className="mdl-data-table__cell--non-numeric">Date played</th>
                        </tr>
                        </thead>
                        <tbody>
                        {formatted && formatted.length < 0 && <tr>No Previous games found </tr>}
                        {formatted && formatted.map(game => <GameItem key={game.id} item={game} />)}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default GameList;