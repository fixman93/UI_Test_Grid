import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../fakeAuth";

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (redirectToReferrer === true) return <Redirect to="/protected" />;

    return (
      <div>
        <p>You must log in to view this page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
