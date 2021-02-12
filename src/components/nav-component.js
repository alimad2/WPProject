import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
  
    render(){
      console.log('navbar render');
      let buttons;
        if (localStorage.getItem('token')){
          buttons = (<ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to={'/'} onClick={() => localStorage.clear()}>خروج</Link>
          </li>
        </ul>)

        }else{
            buttons = (<ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to={'/register'}>ثبت نام</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/login'}>ورود</Link>
            </li>
            
          </ul>)
        }
        return (<nav className="navbar nabvar-expand navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>صفحه اصلی</Link>
            <div className="nav justify-content-end">
              {buttons}
          </div>
        </div>
      </nav>)
    }
}