import Link from "next/link";
import React from "react";

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonLabel: string;
    buttonColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    description,
    price,
    features,
    buttonLabel,
    buttonColor,
}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-2 my-4">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <span className="text-4xl font-bold text-indigo-500">
                    {price}
                </span>
                <span className="text-gray-600">/месяц</span>
            </div>
            <ul className="mt-4 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="w-6 h-6 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <Link href="/"  rel="canonical"
                className={`block mt-6 text-center text-white py-2 rounded-full ${buttonColor} hover:opacity-90 transition-opacity duration-300`}>
                {buttonLabel}
            </Link>
        </div>
    );
};

export default PricingCard;
