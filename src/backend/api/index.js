import axios from "axios";

let Product = require('../models/product.model');

export const fetchData = ()=>{
    try {
        Product.find( { description: "New"});
    } catch (error) {
       console.log(error); 
    }
}