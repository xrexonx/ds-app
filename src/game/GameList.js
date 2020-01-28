import React, { Component } from 'react';
import {fetchPreviousGames, getGameStatus} from './services';
import { Link } from 'react-router-dom';
import GameItem from './GameItem';
import {checkAuth, getAuthUser, logoutUser} from '../login/services';

class GameList extends Component {

    state = {
        isAuth: false
    };

    fetchGames() {
        return fetchPreviousGames(getAuthUser().id);
    }

    async componentDidMount() {
        const prevGames = await this.fetchGames();
        this.setState({ prevGames, isAuth: checkAuth() })
    }

    logout = () => {
        logoutUser();
        this.props.history.push('/');
    };

    render() {
        const prevGames = this.state && this.state.prevGames;
        const formatted = prevGames && prevGames.map(game => {
            return {
                ...game,
                status: getGameStatus(game.status)
            }
        });
        return (
            <div className="mdl-layout__content">
                <div className="mdl-grid mdl-cell--12-col">
                    <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left">
                        <h2 className="mdl-card__title-text">Previous Games</h2>
                    </div>
                    <div className="mdl-layout-spacer"/>
                    <div className="mdl-cell mdl-cell--6-col mdl-typography--text-right">
                        <Link to="/newGame" className="mdl-button mdl-js-button">
                            New Game
                        </Link>
                        <button
                            onClick={this.logout}
                            className="mdl-button mdl-js-button">
                            Logout
                        </button>
                    </div>
                </div>
                <div className="mdl-grid mdl-cell--12-col">
                    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                        <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">Status</th>
                            <th className="mdl-data-table__cell--non-numeric">Date played</th>
                        </tr>
                        </thead>
                        <tbody>
                        {formatted && formatted.length < 0 && <tr>No Previous games found </tr>}
                        {formatted && formatted.map(game => <GameItem key={game.id} item={game} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default GameList;
