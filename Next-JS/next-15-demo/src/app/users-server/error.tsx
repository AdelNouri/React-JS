"use client"
import {useEffect} from 'react';

export default function Error({error}: {error: Error}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex items-center justify-content-center h-screen">
            <div className="text-2xl text-red-500">
                خطا در دریافت دیتای کاربران
            </div>
        </div>
    )
}
