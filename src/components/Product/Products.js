import axios from "axios";
import { Component } from "react";
import Product from './Product';
import { Grid, Typography} from '@material-ui/core';



class Products extends Component{

    state = {products: []}

    constructor(props){
        super(props);
        const query = new URLSearchParams(this.props.location.search);
        const page = parseInt(query.get('page') || '1', 10);
        console.log(page)
        axios.get('/product?page=' + page).then(
            res => {
                console.log(res.data);
                this.setState({products: res.data.list})
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render(){
        return(<main style={{padding: 80}}>
            <Grid container justify="center" spacing={4}>
        {
            this.state.products.map((product) => (
                <Product name={product.name} brand={product.brand} category={product.category} image={product.image}
                link={product.link} price={product.price}></Product>
            ))
        }
        </Grid>
    </main>
        )
    }
}

export default Products;