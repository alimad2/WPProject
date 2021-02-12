import React, { Component } from "react";
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

export default class CreateList extends Component{

    createList = e => {
        const data = {name: this.listName}
        axios.post('/user/list', data).then(
            res => {
                console.log(res);


            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    
    

    render(){
        return (
            <div>
                <TextField onChange={e => this.listName = e.target.value} id="list-name" label="نام" size="small"></TextField>
                <Button variant="contained" color="primary" href="#" onClick={this.CreateList}> ساخت لیست جدید</Button><hr></hr>
                <Button variant="contained">مشاهده لیست ها</Button>
            </div>
            )
    }
}