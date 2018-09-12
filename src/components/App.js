import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AuthButton from "./AuthButton";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Protected from "../container/posts/posts";
import Public from "./pages/Public";
import PostsShow from '../container/posts/posts'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:id" component={PostsShow} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
