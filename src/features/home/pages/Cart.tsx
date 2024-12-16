import React from 'react';

import { MdStar } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa6';

const Cart = () => {
  return (
    <div className="hover:shadow-lg cursor-pointer rounded-sm bg-[#FFFFFF]">
      <div className=" w-[254px] h-[379px] m-2 flex flex-col">
        <div className="flex-[8]">
          <img
            className="w-full h-full object-contain"
            src="https://img.kwcdn.com/product/open/2024-05-09/1715245672695-9d4a0ca15e264cf1aace6f4268131876-goods.jpeg?imageView2/2/w/500/q/80/format/webp"
            alt=""
          />
        </div>
        <div className="flex-[4] flex flex-col items-start justify-start m-1">
          <p className="m-0 text-gray-400 font-semibold">
            Portable Chainsaw Sharpe Set...
          </p>
          <div className="flex w-full justify-between items-center">
            <p className="m-0 flex gap-2">
              <span>UZS</span>
              <span className="font-bold">29364</span>
            </p>
            <span className="text-green-700">5.1k Sold</span>
            <button className="border-2 px-3 py-1 rounded-2xl">
              <FaCartPlus size={25} color="red" />
            </button>
          </div>
          <div>
            <p className="m-0 text-green-500">New Arrival</p>
            <div className="flex items-center gap-2 ">
              <div className="flex items-center flex-row gap-2">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <span className="m-0">215</span>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
