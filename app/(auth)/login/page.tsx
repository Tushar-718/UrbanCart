"use client"

import Button from '@/app/components/common/Button'
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/lib/firestore/Firestore'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {

    const {user}=useAuth();
    const router=useRouter();
    
    useEffect(()=>{
        if(user){
            router.push("/dashboard");
        }
    },[user]);

    return (
        <main className='min-h-screen w-full flex justify-center items-center bg-gray-300'>
            <section className='flex flex-col gap-3 sm:w-[400px] w-full bg-slate-100 min-h-40 items-center px-5 py-8 rounded-lg shadow-lg'>
                <h1 className='text-xl font-semibold'>Login With Email</h1>
                <form className='w-full mt-2 flex flex-col gap-4'>
                    <input
                        className='w-full px-3 py-2 border-2 rounded-md focus:outline-none bg-slate-100'
                        placeholder='Enter Your Name'
                        type='email'
                        id='user-email'
                        name='user-email' />
                    <input
                        className='w-full px-3 py-2 border-2 rounded-md focus:outline-none bg-slate-100'
                        placeholder='Enter Your Password'
                        type='password'
                        id='user-password'
                        name='user-password' />
                    <Button className='bg-blue-700 text-white font-bold px-5 py-2 rounded-lg mt-4' type='submit'>Login</Button>
                    <div className='flex justify-between'>
                        <Link href={'/sign-up'}><Button className='text-sm text-blue-700'>New? Create Account</Button></Link>
                        <Link href={'/forget-password'}><Button className='text-sm text-blue-700'>Forget password?</Button></Link>
                    </div>
                    <hr />
                    <SignInWithGoogleComponent />
                </form>
            </section>
        </main>
    )
}

export default page

const SignInWithGoogleComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const user = await signInWithRedirect(auth, new GoogleAuthProvider());
        } catch (error: unknown) {
            const errorMessage = (error as Error)?.message || "An unknown error occurred.";
            toast.error(errorMessage);
        }
        setIsLoading(false);
    }
    return <Button disabled={isLoading} onClick={handleLogin} className='bg-red-500 text-white font-bold px-5 py-2 rounded-lg'>Sign In With Google</Button>
}