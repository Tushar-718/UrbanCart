"use client"

import { Menu } from 'lucide-react'
import React from 'react'

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <section className='flex items-center gap-3 bg-white border-b p-4'>
            <div className='flex justify-center items-center md:hidden'>
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="focus:outline-none"
                >
                    <Menu />
                </button>
            </div>
            <h1 className='text-xl font-semibold'>Dashboard</h1>
        </section>
    )
}

export default Header