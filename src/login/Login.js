import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { checkAuth, login } from './services';

class Login extends Component {

    flip = (flip) => () => {
        const loginDiv = document.querySelector('#cube');
        if (loginDiv) {
            loginDiv.className = '';
            loginDiv.classList.add(flip);
        }
    };

    getUserInfo = () => {
        const userName = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        return { userName, password }
    };

    login = async () => {
        this.props.history.push('/newGame');
        // const { userName, password } = this.getUserInfo();
        // const loginResponse = await login({ userName, password });
        // const isAuth = checkAuth(loginResponse);
        // if (isAuth) {
        //     this.props.history.push('gameList');
        // }
    };

    signUp = async () => {
        this.props.history.push('/gameList');
        // const { userName, password } = this.getUserInfo();
        // const fullName = document.querySelector('#fullName').value;
        // this.props.history.push('gameList');
    };

    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <section className="container">
                    <div id="cube" className="show-front">
                        <figure className="front">
                            <div className="mdl-card mdl-shadow--6dp">
                                <div className="mdl-card__title mdl-color--primary mdl-color-text--white relative">
                                    <h2 className="mdl-card__title-text">Simple Login</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="username"/>
                                        <label className="mdl-textfield__label" htmlFor="username">Username</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" type="password" id="password"/>
                                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <div className="mdl-grid">
                                        <button
                                            onClick={this.login}
                                            className="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
                                            Login
                                        </button>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--12-col">
                                            <a
                                                href="#"
                                                onClick={this.flip('show-left')}
                                                className="mdl-color-text--primary">
                                                Sign up!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <figure className="left">
                            <div className="mdl-card mdl-shadow--6dp">
                                <div className="mdl-card__title mdl-color--primary mdl-color-text--white relative">
                                    <a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
                                       onClick={this.flip('show-front')}>
                                        <i className="material-icons">arrow_back</i>
                                    </a>
                                    <h2 className="mdl-card__title-text">Sign up</h2>
                                </div>

                                <div className="mdl-card__supporting-text">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="fullname"/>
                                        <label className="mdl-textfield__label" htmlFor="fullname">Full name</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="username"/>
                                        <label className="mdl-textfield__label" htmlFor="username">Username</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" type="password" id="password"/>
                                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                                    </div>
                                </div>

                                <div className="mdl-card__actions mdl-card--border">
                                    <div className="mdl-grid">
                                        <button
                                            onClick={this.signUp}
                                            className="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(Login);