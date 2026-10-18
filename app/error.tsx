"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Terjadi error di aplikasi:", error);
    }, [error]);

    return (
        <div className="min-h-screen w-full bg-red-950 flex justify-center items-center flex-col gap-y-8">
            <h1 className="text-white text-center px-4 text-2xl sm:text-3xl lg:text-4xl font-bold">Waduh, ada masalah nih di dapur kami!</h1>
            <p className="text-white text-center px-4 text-sm sm:text-base lg:text-lg max-w-xl">{error?.message || "Terjadi kesalahan yang tidak diketahui"}</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="rounded-lg bg-orange-600 px-6 py-3 text-white font-bold hover:bg-orange-700 transition-colors duration-300" onClick={reset}>Coba lagi deh</button>
                <Link className="rounded-lg bg-orange-600 px-6 py-3 text-white font-bold hover:bg-orange-700 transition-colors duration-300" href="/">Kembali ke Beranda</Link>
            </div>
        </div>
    );
}