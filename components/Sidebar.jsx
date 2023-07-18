import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx';
import {FiSettings} from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi';


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
            <Link href="/">
                <div className='bg-orange-800 text-white p-3 rounded-lg inline-block'>
                    <RxSketchLogo size={21} />
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href="/">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxDashboard size={21} />
                </div>
            </Link>
            <Link href="/Customers">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <RxPerson size={21} />
                </div>
            </Link>
            <Link href="/Order">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <HiOutlineShoppingBag size={21} />
                </div>
            </Link>
            <Link href="/">
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                    <FiSettings size={21} />
                </div>
            </Link>
            </div>
        </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar;
