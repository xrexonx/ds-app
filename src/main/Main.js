import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from "../login/Login";
import GameList from "../game/GameList";
import NewGame from "../game/NewGame";

const Main = () => {
    return (
        <main className="mdl-layout__content">
            <Fragment>
                <Route path="/" exact component={Login} />
                <Route path="/gameList" component={GameList} />
                <Route path="/newGame" component={NewGame} />
            </Fragment>
        </main>
    );
};

export default Main;
