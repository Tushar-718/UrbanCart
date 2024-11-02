"use client"

import React, { useEffect, useRef, useState } from 'react'
import SideBar from './components/SideBar';
import Header from './components/Header';
import { usePathname } from 'next/navigation';

interface LayoutProps {
    children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        toggleSidebar();
    }, [pathname])

    useEffect(() => {
        const handleClickOutEvent = (event:MouseEvent) => {
            if (sidebarRef?.current && !sidebarRef?.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutEvent);
        return () => {
            document.removeEventListener('mousedown', handleClickOutEvent);
        }
    }, [])

    return (
        <main className='relative flex'>
            <div className='hidden md:block'>
                <SideBar />
            </div>
            <div ref={sidebarRef} className={`fixed md:hidden ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[-250px]'}`}>
                <SideBar />
            </div>
            <section className='flex-1 flex flex-col min-h-screen'>
                <Header toggleSidebar={toggleSidebar} />
                <section className='flex-1 bg-[#f4f4f5]'>{children}</section>
            </section>
        </main>
    )
}

export default layout