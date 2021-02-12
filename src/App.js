import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home-component';
import Nav from './components/nav-component';
import Login from './components/login-component';
import Register from './components/register-component';
import Profile from './components/profile-component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';

export default class App extends Component {
  
  state = {}
  componentDidMount = () =>{
    // console.log(localStorage.getItem('username'))
    axios.get('/user/self').then(
        res => {
                this.setState({
                    user: res.data
                })
                console.log(res.data);
                // localStorage.setItem('pn', res.data.phonu)
        },
        err =>{
            console.log(err)
        }
    )
}
  
  render(){
  return (
    <BrowserRouter>
      <div className="App">
          <Nav user={this.state.user}/>

          {/* <div className="auth-wrapper"> */}
            {/* <div className="auth-inner"> */}
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <PrivateRoute path="/profile" component={Profile}/>
              </Switch>
            {/* </div> */}
          {/* </div> */}

      </div>
    </BrowserRouter>
  );
}
}

