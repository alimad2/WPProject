import React, { Component } from "react";

export default class Profile extends Component{
    
    

    render(){
        console.log('home render');
        if (localStorage.getItem('token')){

            return <h2>بروفایل کاربر</h2>
        }
        return <h2>لطفا وارد شوید.</h2>
    }
}