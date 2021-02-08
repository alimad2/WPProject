import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(){
        return (<nav className="navbar nabvar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>Home</Link>
            <div className="nav justify-content-end">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/register'}>Sign Up</Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>)
    }
}