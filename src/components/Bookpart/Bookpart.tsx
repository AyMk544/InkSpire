"use client";

import React, { useEffect, useState } from 'react';
import BookCard from '../bookCard/bookCard';
import Image from 'next/image';
import Loading from '../Loading/Loading'
import { res_el } from '@/app/library/page';

const BookList: React.FC = ({books}:any) => {

  return (
    <div>
      {books && books.length  > 0 ? (
        <div>
          <h1 className='font-serif text-[2rem] ml-8 font-bold text-red-950'>Popular Picks</h1>
          <div className="w-[100%] flex justify-center items-start gap-[10px] mt-[5px]">
            <div className='grid grid-cols-3 gap-1.5'>
              {books.map((book:res_el) => (
                <BookCard key={book._id} data={book} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='text-[50px] text-bold'>No Books Available</div>
      )}
    </div>
  );
};

export default BookList;