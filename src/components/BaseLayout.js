import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid nav">
        <nav className="row navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeClassName="selected" exact to="/">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/create">
                    CREATE POST
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/show">
                    SHOW ALL POSTS
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
