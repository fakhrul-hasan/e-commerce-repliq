'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const page = () => {
const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
    return (
        <div className='px-24 my-12'>
            <h1 className='text-6xl text-center font-light uppercase my-8'>All Products</h1>
            <div className='grid grid-cols-3 gap-8'>
              {
                products.map(product=><ProductCard key={product.id} product={product} />)
              }
            </div>
        </div>
    );
};

export default page;