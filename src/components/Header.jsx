import React from 'react'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className='w-full bg-transparent shadow-md flex justify-between items-center py-4 px-6 sticky top-0 z-50'>
            {/* Logo Section */}

            <div className='flex items-center w-1/2 gap-x-4'>
                <div className='text-2xl font-bold text-secondary'>FardaDev</div>

                <div className='flex-1 max-w-2xl  mx-8'>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='جستجو...'
                        className='w-full bg-gray-100 rounded-full px-4 py-2  focus:outline-none focus:ring-2
                         focus:ring-primary'
                    />
                    <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                </div>
            </div>
            </div>

            {/* Navigation Icons */}
            <div className='flex items-center gap-x-6'>
                <button className='flex items-center gap-x-2 text-secondary hover:text-primary-hover transition-colors'>
                    <FaUser className='text-xl' />
                </button>
                <button className='flex items-center gap-x-2 text-secondary hover:text-primary-hover transition-colors'>
                    <FaShoppingCart className='text-xl'  />
                </button>
            </div>
        </header>
    )
}

export default Header
