import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAuth, logout } from '../actions/auth'

class Auth extends Component {

  render() {
    const { auth } = this.props;

    switch (auth.status) {
      case 'AUTH_LOGGED_IN':
        return (
          <div id="auth">
            <img className="avatar" width="30" height="30" src={ auth.avatar }></img>
            <span>{ auth.username }</span>
            <button id="logout" onClick={ this.props.logout }>Log out</button>
          </div>
        );
      case 'AUTH_AWAITING_RESPONSE':
        return (
          <button disabled>logging in...</button>
        );
      default:
        return (
          <button onClick={ this.props.startAuth }>login with Google</button>
        );
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const mapDispatchToProps = {
  startAuth,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
