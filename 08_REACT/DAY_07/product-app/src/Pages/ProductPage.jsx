import React, { useEffect,useState } from 'react'
import ViewProduct from './ViewProduct'

function ProductPage() {

    // state creation for holding products details
    const[products,setProducts]=useState({})

    //Define base url
    const baseUrl='https://dummyjson.com/products'

    // Define API fetching function
    const productfetch= async ()=>{
        const response =await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setProducts(arraydata.products))
        console.log(products);
        
    }
    // 3 Function call
    useEffect(()=>{
        productfetch()
    },[])
  return (
    <div>

    <ViewProduct data={products}/>
    </div>
  )
}

export default ProductPage