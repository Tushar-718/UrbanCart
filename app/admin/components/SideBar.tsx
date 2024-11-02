"use client"
import MainLogo from '@/app/components/common/MainLogo'
import { auth } from '@/lib/firestore/Firestore'
import { signOut } from 'firebase/auth'
import { Building2, ChartColumnStacked, LayoutDashboard, LogOut, PackageOpen, ShoppingCart, SquareLibrary, Star, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

interface MenuItem {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const SideBar: React.FC = () => {
    const menuList: MenuItem[] = [
        {
            name: 'Dashboard',
            link: '/admin',
            icon: <LayoutDashboard />,
        },
        {
            name: 'Products',
            link: '/admin/products',
            icon: <PackageOpen />
        },
        {
            name: 'Categories',
            link: '/admin/categories',
            icon: <ChartColumnStacked />
        },
        {
            name: 'Brands',
            link: '/admin/brands',
            icon: <Building2 />
        },
        {
            name: 'Orders',
            link: '/admin/orders',
            icon: <ShoppingCart />
        },
        {
            name: 'Customers',
            link: '/admin/customers',
            icon: <User />
        },
        {
            name: 'Reviews',
            link: '/admin/reviews',
            icon: <Star />
        },
        {
            name: 'Collections',
            link: '/admin/collections',
            icon: <SquareLibrary />
        },
    ]
    return (
        <section className="flex flex-col gap-3 border-r px-4 h-screen overflow-hidden w-[250px] bg-white">
            <div className="flex justify-center my-6">
                <MainLogo />
            </div>
            <ul className="flex flex-1 flex-col gap-5 h-full overflow-y-auto">
                {menuList.map((item, key) => (
                    <Tabs item={item} key={key} />
                ))}
            </ul>
            <button className='flex items-center gap-2 px-4 py-2 justify-center hover:bg-red-400 ease-in-out duration-300 my-4 rounded-xl'
                onClick={async () => {
                    try {
                        await toast.promise(signOut(auth), {
                            error: (e) => e?.message,
                            loading: 'Loading...',
                            success: 'Succesfully Logged Out'
                        })
                    } catch (error: unknown) {
                        if (error instanceof Error) {
                            toast.error(error.message);
                        } else {
                            toast.error('An unknown error occurred');
                        }
                    }
                }}
            >
                <LogOut /><strong>LogOut</strong>
            </button>
        </section>
    );
}

export default SideBar

interface TabsProps {
    item: MenuItem;
}

const Tabs: React.FC<TabsProps> = ({ item }) => {
    const pathName = usePathname();
    const isSelected = pathName === item.link;

    return (
        <Link href={item.link}>
            <li
                className={`flex gap-2 items-center px-4 py-2 rounded-xl ease-in-out transition-all duration-300 ${isSelected ? 'bg-[#3b82f6] text-white' : 'bg-white text-black'
                    }`}
            >
                {item.icon} <strong>{item.name}</strong>
            </li>
        </Link>
    );
};