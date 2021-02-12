import { Component } from "react";
import axios from 'axios';
import UserList  from './UserList'


export default class UserLists extends Component{

    constructor(props){
        super(props);
        axios.get('/user/list').then(
            res => {
                console.log(res.data);
                this.lists = res.data
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render(){
        return(<div>
            <UserList></UserList>
        </div>)
    }
}