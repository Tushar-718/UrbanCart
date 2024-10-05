"use client"

import Link from "next/link";
import React from "react";
import MainLogo from "../common/MainLogo";
import Button from "../common/Button";

const Header = () => {
    const menuList = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "Contact Us", link: "/contact-us" },
    ];
    return (
        <nav>
            <div className="flex flex-1 h-20 border-b justify-between items-center px-20">
                <Link href={'/'}>
                    <MainLogo />
                </Link>
                <div className="flex items-center gap-14">
                    <div className="flex gap-10 items-center cursor-pointer">
                        {menuList.map(menuItem => (
                            <Link href={menuItem.link} key={menuItem.name}>
                                <div className="font-semibold text-xl">
                                    {menuItem.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <Link href={'/login'}>
                        <Button type="button" className="rounded-full px-5 py-2 bg-indigo-800 text-white font-bold">Login</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
