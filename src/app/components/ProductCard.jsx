import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({product}) => {
    console.log(product);
    const {thumbnail, category, title, price, id} = product;
    return (
        <Link href={`/products/${id}`} className='h-80 group relative bg-slate-200 rounded'>
            <Image className='h-full w-full' src={thumbnail} alt="" height='300' width='300' />
            <span className='absolute top-0 left-0 bottom-0 right-0 p-5 bg-black bg-opacity-90 transition-all duration-500 opacity-0 group-hover:opacity-100 rounded'></span>
            <div className='text-white text-center w-full absolute top-1/2 transform group-hover:-translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100'>
                <p className='capitalize text-gray-400'>{category}</p>
                <h4 className='uppercase text-lg mb-4'>{title}</h4>
                <p className='text-gray-400'>${price}</p>
                <button className='btn btn-xs btn-primary'>Add to Cart</button>
            </div>
        </Link>
    );
};

export default ProductCard;