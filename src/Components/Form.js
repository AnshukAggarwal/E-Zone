import React from "react";

function Form({data, handleSubmit, handleQuery}){
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name= "query"
            value={data.query}
            onChange={handleQuery}/>
            <button>Search</button>
        </form>
    )
}

export default Form