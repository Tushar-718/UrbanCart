"use client"

import { AuthContextProvider } from "@/context/AuthContext"

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return <AuthContextProvider>{children}</AuthContextProvider>
}