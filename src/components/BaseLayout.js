import React, { Component } from "react";
import App from './App';
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink exact to="/">
                    DEV’S DEV BLOG
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/create">
                    CREATE POST
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/show">
                    SHOW ALL POSTS
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <App />
      </div>
    );
  }
}
