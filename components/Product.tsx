'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;
export const Product = ({ id, title, price, description, category, image }: Product) => {
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    const [hasPrime] = useState(Math.random() > 0.7)
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} alt='' width={200} height={200} className='object-contain mx-auto flex flex-grow' />
            {/* <div className='bg-red-700 min-w-[200] flex flex-grow '>
            </div> */}
            <h4 className='my-3'>{title} </h4>
            <div className='flex'>
                {[...new Array(rating)].map((arr, i) => {
                    return < StarIcon key={i} className='h-4 text-yellow-500' />
                })}
                {/* {Array(rating).fill().map((_, i) => {
                    <StarIcon className='h-4' />;
                })} */}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description} </p>


            <div className='mb-5'>
                <Currency quantity={price} currency='GBP' />
            </div>
            {hasPrime && <div className='flex items-center space-x-2 -mt-5'>
                <img className='h-6' src='https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-prime-logo.jpg' alt='' />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>}
            <button className='mt-auto button border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>Add to basket</button>
            {/* {title} */}
        </div>
    )
}
