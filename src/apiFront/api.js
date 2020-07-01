import axios from "axios"

export const getProducts = async ()=>{
    let {data} = await axios.get('http://localhost:5000/api/products');
    return data
}

export const getVendors = async ()=>{
    let {data} = await axios.get('http://localhost:5000/api/vendors');
    return data
}

export const getFilteredProducts = async (filters=[])=>{
    const filter = {
        filters
    };
    let {data} = await axios.post('http://localhost:5000/api/products/review',filter);
    return data
}
// export const getFilteredProducts = (filters = []) => {
//     const data = {
//         filters
//     };
//     return fetch('http://localhost:5000/api/products/review', {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };