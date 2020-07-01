import React from"react";
import "../index.css";


function Product({data}){
    return(
        <div className="flex-row item">
            <h3>Name: {data.name} </h3>
            <h3>Description: {data.description.substring(0,20)} </h3>
            <h3>Cost: {data.cost} </h3>
        </div>
    )
}


export default Product