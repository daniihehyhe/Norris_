// app/components/TheFooter.jsx
"use client";

import Link from "next/link";
import React from "react";

function TheFooter() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We are a leading company providing the best services
                            to our customers. Our goal is to ensure customer
                            satisfaction through top-notch services.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">
                                <Link href="/home" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/catalog"
                                    className="hover:underline">
                                    Catalog
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="/contact"
                                    className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Email: contact@company.com</li>
                            <li className="mb-2">Phone: +1 123 456 7890</li>
                            <li className="mb-2">
                                Address: 1234 Street, City, Country
                            </li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor">
                                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24H12.82v-9.294H9.692V11.27h3.128v-2.26c0-3.1 1.894-4.788 4.658-4.788 1.324 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.763v2.311h3.591l-.467 3.436h-3.124V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor">
                                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.867 9.867 0 01-3.127 1.195 4.92 4.92 0 00-8.385 4.482 13.956 13.956 0 01-10.141-5.146 4.822 4.822 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.14 1.523 4.15 3.78 4.587a4.936 4.936 0 01-2.224.085 4.936 4.936 0 004.604 3.42A9.867 9.867 0 010 21.542 13.94 13.94 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="text-pink-500 hover:text-pink-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 2.042.24 2.51.414a4.999 4.999 0 011.825 1.074 4.999 4.999 0 011.074 1.825c.175.468.359 1.304.414 2.51.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.24 2.042-.414 2.51a4.999 4.999 0 01-1.074 1.825 4.999 4.999 0 01-1.825 1.074c-.468.175-1.304.359-2.51.414-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.042-.24-2.51-.414a4.999 4.999 0 01-1.825-1.074 4.999 4.999 0 01-1.074-1.825c-.175-.468-.359-1.304-.414-2.51-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.24-2.042.414-2.51a4.999 4.999 0 011.074-1.825 4.999 4.999 0 011.825-1.074c.468-.175 1.304-.359 2.51-.414 1.265-.059 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.053.072c-1.273.058-2.15.26-2.908.548a6.992 6.992 0 00-2.611 1.709A6.992 6.992 0 00.072 7.053c-.287.757-.49 1.635-.548 2.908C-.015 8.332 0 8.741 0 12c0 3.259-.015 3.668.072 4.947.058 1.273.26 2.15.548 2.908a6.992 6.992 0 001.709 2.611 6.992 6.992 0 002.611 1.709c.757.287 1.635.49 2.908.548C8.332 23.985 8.741 24 12 24c3.259 0 3.668-.015 4.947-.072 1.273-.058 2.15-.26 2.908-.548a6.992 6.992 0 002.611-1.709 6.992 6.992 0 001.709-2.611c.287-.757.49-1.635.548-2.908C23.985 15.668 24 15.259 24 12c0-3.259.015-3.668-.072-4.947-.058-1.273-.26-2.15-.548-2.908a6.992 6.992 0 00-1.709-2.611A6.992 6.992 0 0019.947.548c-.757-.287-1.635-.49-2.908-.548C15.668-.015 15.259 0 12 0z" />
                                    <path d="M12 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.123a3.96 3.96 0 1 1 0-7.921 3.96 3.96 0 0 1 0 7.92zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="text-blue-700 hover:text-blue-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor">
                                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zm-1.78-12.7c-1.14 0-1.84-.76-1.84-1.71 0-.97.73-1.72 1.88-1.72 1.16 0 1.84.75 1.85 1.72 0 .96-.69 1.71-1.89 1.71zm13.36 12.7h-3.55V14.8c0-1.42-.51-2.38-1.78-2.38-.97 0-1.54.65-1.8 1.28-.09.23-.11.55-.11.87v5.88H8.89V9H12v1.56c.41-.63 1.16-1.55 2.84-1.55 2.08 0 3.64 1.34 3.64 4.22v7.23z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 mt-8">
                    &copy; {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}

export default TheFooter;
