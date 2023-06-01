import React from 'react'
import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

export const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue">
        <div className="  mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src={'/../public/images/Amazon.png'}
            alt="amazon logo"
            // fill
            width={150}
            height={20}
            className=" cursor-pointer object-cover h-[70px] w-[150px]  "
          />
        </div>
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer items-center">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4 text-white" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs gap-6 mx-6">
          <div className="link">
            <p>Hello WPM!</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 w-4 h-4 text-center rounded-full font-bold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex space-x-3 p-2 items-center bg-amazon_blue-light text-white">
        <p className="flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}
