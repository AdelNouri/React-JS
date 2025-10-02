"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function Navigation() {
    const pathname = usePathname();
    return <nav className='flex justify-content-items-center p-4'>
        <Link className={pathname === "/" ? 
        "font-bold mr-4" : 
        "text-blue-500 mr-4"} href="/">خانه</Link>
        <Link className={pathname === "/about" ? 
        "font-bold mr-4" :
         "text-blue-500 mr-4"} href="/about">درباره ما</Link>
        <Link className={pathname.startsWith('/products/1') ? 
        "font-bold mr-4" : 
        "text-blue-500 mr-4"} href="/products/1">محصول اول</Link>
        <SignedOut>
            <SignInButton mode='modal'/>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </nav>
}