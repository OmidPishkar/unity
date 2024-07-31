import { Search } from 'lucide-react'
import React from 'react'

const LeftNavbar = () => {
    return (
        <div className='flex items-center text-sm gap-2 text-[#808191] px-2 py-1 cursor-pointer'>
            <Search size={18}/>
            Search Everything
        </div>
    )
}

export default LeftNavbar