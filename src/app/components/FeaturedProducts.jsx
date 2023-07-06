"use client";
import React, { useState } from 'react';
import { useEffect } from "react";
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
  },[])
  const featuredProducts = products.sort((a,b)=> b.rating - a.rating).slice(0, 6);
  console.log(featuredProducts);
    return (
        <>
         <h1 className='text-6xl text-center font-light uppercase my-4'>Featured Products</h1>
        <p className='text-center text-lg uppercase text-gray-400 tracking-[7px] my-4'>best from the best!</p>
        <div className='grid grid-cols-3 gap-8 my-12'>
        {
            featuredProducts.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
        }
        </div>
        </>
    );
};

export default FeaturedProducts;