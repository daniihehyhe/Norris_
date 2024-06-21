'use client'
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03, // Уменьшенная задержка между буквами для улучшения производительности
        },
    }),
};

interface LetterByLetterProps {
    children: ReactNode;
}

const LetterByLetter: React.FC<LetterByLetterProps> = ({ children }) => {
    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1,
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div>
            <div ref={ref}>
                {React.Children.map(children, (child, index) => {
                    if (typeof child === "string") {
                        return child.split("").map((char, i) => (
                            <motion.span
                                key={`${char}-${index}-${i}`}
                                custom={i}
                                initial="hidden"
                                animate={controls}
                                variants={letterVariants}
                                className="">
                                {char}
                            </motion.span>
                        ));
                    } else {
                        return <>{child}</>;
                    }
                })}
            </div>
        </div>
    );
};

export default LetterByLetter;
