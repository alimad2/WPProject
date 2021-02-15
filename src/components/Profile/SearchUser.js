import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    textField: {
        paddingLeft: theme.spacing(3)
    },
    button: {
        marginLeft: theme.spacing(3)
    }
  });


class SearchUser extends Component {

    state = {redirect: null}

    searchUser = e => {
        e.preventDefault();
        // console.log('here');
        // // const data = {username: this.searchUsername};
        // // console.log(data)
        axios.get('/user/' + this.searchUsername).then(
            res => {
                console.log(res.data);
                this.setState({redirect:'/user/' + this.searchUsername})
            }
        ).catch(
            err => {
                if (err.response.status == 404){
                    alert('matching query does not exist.')
                }
            }
        )
    }

    render(){
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}></Redirect>
        }
        const {classes} = this.props;
    return (
        <div>
            <p>‌شما می‌توانید از این قسمت کاربرهای دیگر را سرچ کنید.</p>
            <TextField onChange={e => this.searchUsername = e.target.value} className={classes.textField} size="small"></TextField>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.searchUser}>جستجو</Button>
        </div>
    )
    }
}

export default withStyles(styles)(SearchUser)