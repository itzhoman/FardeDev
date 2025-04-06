import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className=' w-full bg-gray-500 flex justify-between items-center py-4 px-6  
       sticky top-0 '>
            {/* Logo Sectioion */}
            <div className='flex items-center gap-x-2'>
                <img src="" alt="Logo" />
                <input
                    type="text"
                    placeholder='Search...'
                    className='bg-primary '
                >
                    <FaSearch />
                </input>
            </div>

        </header>
    )
}

export default Header
