import React from 'react';
import Vendor from "./Components/Vendor"
import Product from "./Components/Product"
import Form from "./Components/Form"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { getProducts, getVendors, getFilteredProducts } from "./apiFront/api"
import axios from 'axios';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            products:[],
            vendors:[],
            query:""
        }
        this.handleFilters= this.handleFilters.bind(this);
        this.loadFilteredResults= this.handleFilters.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
    }

    async componentDidMount(){
        //function to get all products and vendors
        let products= await getProducts();
        let vendors = await getVendors();
        this.setState({
            products:products,
            vendors:vendors,
        })
    }

    async handleFilters(filters){
        //function to manage the vendors checkbox
        let {data}= await getFilteredProducts(filters);
        this.setState({
            products:data
        })
        
        
    }

    handleQuery= async (e)=>{
        //function to get value of search box
        const query = e.target.value;
        this.setState({
            query:query
        });

        // const {data} = await axios.get("http://localhost:5000/api/products/search",{
        //     params:{
        //         query:query,
        //     }
        // });
        // this.setState({
        //     products:data
        // })
    }

    handleSubmit= async(e)=>{
        e.preventDefault();
        //This can be moved to the handleQuery method as well
        const {data} = await axios.get("http://localhost:5000/api/products/search",{
            params:{
                query:this.state.query,
            }
        });
        this.setState({
            products:data
        })
    }


    render(){
        const { query } = this.state;
        let productsArray = this.state.products.map( product => <Product key ={product._id} data={product}/> );
        let displayText = productsArray.length>0 ? productsArray : <h4>No Results Found</h4>
        return(
            <div>
                <Header/>
                <div className="row container">
                    <div className="col-4">
                        <h3>Filter By Make</h3>
                        <Vendor data={this.state.vendors} handleFilters={this.handleFilters}/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <Form data={this.state} handleSubmit={this.handleSubmit} handleQuery={this.handleQuery}/>
                        </div>
                        <h2 className="mb-4">Products</h2>
                        <div className="row">
                            <div className="flex">
                                {displayText}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
        
    }

}




export default App