"use client";

import clsx from 'clsx'
import React from 'react'
import LeftNavbar from './left-navbar'
import RightNavbar from './right-navbar'
import { Equal } from 'lucide-react'
import useActiveSidebar from '@/hooks/use-active-sidebar'

const Navbar = () => {

    const { active , setActive } = useActiveSidebar()

    return (
        <nav
            className={clsx(
                `w-full h-[96px] border-b border-gray-400  lg:w-[calc(100%-256px)]
                lg:ml-[256px] py-7 px-8 lg:px-16 flex items-center justify-between`
            )}
        >
            <button
                onClick={() => setActive(true)}
                className={clsx('lg:hidden p-3' , active ? "hidden" : "block")}
            >
                <Equal/>
            </button>
            <LeftNavbar/>
            <RightNavbar/>
        </nav>
    )
}

export default Navbar