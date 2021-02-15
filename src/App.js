import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Login, Register, Profile, PrivateRoute, Home, UserLists, SingleList, User} from './components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import UserSingleList from './components/User/UserSingleList';

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
                <PrivateRoute exact path="/profile" component={Profile}/>
                <PrivateRoute exact path="/list" component={UserLists}/>
                <PrivateRoute exact path="/list/:id" component={SingleList}/>
                <PrivateRoute exact path="/user/:username" component={User}/>
                <PrivateRoute exact path="/user/:username/list/:id" component={UserSingleList}/>
              </Switch>
            {/* </div> */}
          {/* </div> */}

      </div>
    </BrowserRouter>
  );
}
}

