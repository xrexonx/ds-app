import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { checkAuth, login } from './services';
import SimpleButton from '../_widgets/SimpleButton';

class Login extends Component {

    state = {
      isAuth: false
    };

    componentDidMount() {
        this.setState({ isAuth: checkAuth() });
    };

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

    genericValidation = (formData) => {
        // TODO: Add validation here.
        return formData;
    };

    login = async () => {
        const { userName, password } = this.genericValidation(this.getUserInfo());
        await login({ userName, password });
        this.setState({ isAuth: checkAuth() });
    };

    signUp = async () => {
        this.props.history.push('/gameList');
        // const { userName, password } = this.getUserInfo();
        // const fullName = document.querySelector('#fullName').value;
        // this.props.history.push('gameList');
    };

    render() {
        console.log('this.state.isAuth', this.state.isAuth);
        if (this.state.isAuth) {
            this.props.history.push('gameList');
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
                                            <SimpleButton clickEvent={this.login} btnLabel="Login" />
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
                                    <div className="mdl-card__title mdl-color--teal-300 mdl-color-text--white relative">
                                        <a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
                                           onClick={this.flip('show-front')}>
                                            <i className="material-icons">arrow_back</i>
                                        </a>
                                        <h2 className="mdl-card__title-text">Sign up</h2>
                                    </div>

                                    <div className="mdl-card__supporting-text">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                            <input className="mdl-textfield__input" id="fullname" required />
                                            <label className="mdl-textfield__label" htmlFor="fullname">Full name</label>
                                        </div>
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
                                            <SimpleButton clickEvent={this.signUp} btnLabel="Sign up" />
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
