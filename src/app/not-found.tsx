"use client";

import Link from "next/link";
import React from "react";


function NotFound() {
    return (
        <html lang="en">
            <body className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-red-700 mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold mb-2">
                        Oops! Page not found
                    </h2>
                    <p className="text-gray-700 mb-6">
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>
                    <Link href="/"  rel="canonical"  className="text-blue-500 hover:underline">
                        Go to Homepage
                    </Link>
                </div>
            </body>
        </html>
    );
}

export default NotFound;
