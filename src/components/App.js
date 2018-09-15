import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AuthButton from "./AuthButton";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Protected from "../container/posts/posts";
import Public from "./pages/Public";
import PostDetail from '../container/posts/postDetail/postDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navBar">
            <AuthButton />
            <ul>
              <li>
                <Link to="/">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
          </div>

          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:id" component={PostDetail} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
