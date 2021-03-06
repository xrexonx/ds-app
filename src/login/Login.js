import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { checkAuth, loginUser, setUserAuth, signUpUser } from './services';
import SimpleButton from '../_widgets/SimpleButton';

const Login = () => {

    const history = useHistory();
    const [ isAuth, setAuth ] = useState(false);

    useEffect(() => {
        setAuth(checkAuth())
    }, []);

    const flip = (flip) => () => {
        const loginDiv = document.querySelector('#cube');
        if (loginDiv) {
            loginDiv.className = '';
            loginDiv.classList.add(flip);
        }
    };

    const login = async () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const loginResponse = await loginUser({ username, password });
        Object.keys(loginResponse).length
            ? setResponseAuth(loginResponse)
            : alert('Player not found');
    };

    const signUp = async () => {
        const fullName = document.querySelector('#fullName').value;
        const userName = document.querySelector('#userName').value;
        const password = document.querySelector('#passWord').value;
        const signUpResponse = await signUpUser({ userName, password, fullName });
        setResponseAuth(signUpResponse)
    };

    const setResponseAuth = (response) => {
        setUserAuth(response);
        setAuth(checkAuth())
    };

    if (isAuth) {
        history.push('gameList');
    }
    return (
        <div>
            <div className="mdl-layout mdl-js-layout">
                <section className="container">
                    <div id="cube" className="show-front">
                        <figure className="front">
                            <div className="mdl-card mdl-shadow--6dp">
                                <div className="mdl-card__title mdl-color--teal-300 mdl-color-text--white relative">
                                    <h2 className="mdl-card__title-text">Login</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="username" required />
                                        <label className="mdl-textfield__label" htmlFor="username">Username</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" type="password" id="password" required />
                                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <div className="mdl-grid">
                                        <SimpleButton clickEvent={login} btnLabel="Login" />
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--12-col">
                                            <a
                                                href="#"
                                                onClick={flip('show-left')}
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
                                <div className="mdl-card__title mdl-color--teal-300 mdl-color-text--white relative">
                                    <a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
                                       onClick={flip('show-front')}>
                                        <i className="material-icons">arrow_back</i>
                                    </a>
                                    <h2 className="mdl-card__title-text">Sign up</h2>
                                </div>

                                <div className="mdl-card__supporting-text">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="fullName" required />
                                        <label className="mdl-textfield__label" htmlFor="fullName">Full name</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" id="userName" required />
                                        <label className="mdl-textfield__label" htmlFor="userName">Username</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input" type="password" id="passWord" required />
                                        <label className="mdl-textfield__label" htmlFor="passWord">Password</label>
                                    </div>
                                </div>

                                <div className="mdl-card__actions mdl-card--border">
                                    <div className="mdl-grid">
                                        <SimpleButton clickEvent={signUp} btnLabel="Sign up" />
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
