import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    maxWidth: 250,
  },
});

class Product extends  Component{

    
  render(){
    const {classes} = this.props;
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://johnlewis.scene7.com/is/image/JohnLewis/239246776?$rsp-pdp-port-640$"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.price} تومان
              </Typography>
              <Typography variant="body3" color="textSecondary" component="p">
                {this.props.category} س
              </Typography>
              <Typography variant="body3" color="textSecondary" component="p">
                {this.props.brand} f
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={'//' + this.props.link} size="small" color="primary">
                لینک
            </Button>
            {/* <Button size="small" color="primary">
              {this.props.interest}/10
            </Button> */}
          </CardActions>
        </Card>
      );
  }
  
}

export default withStyles(styles)(Product)