'use client'
import React, { useEffect, useState } from 'react';

const page = () => {
const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
    return (
        <div>
            <h1 className='text-6xl text-center font-light uppercase my-4'>All Products</h1>
        </div>
    );
};

export default page;