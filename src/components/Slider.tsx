import React, { useState, ReactNode, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { RiArrowRightWideLine, RiArrowLeftWideFill } from "react-icons/ri";

interface SliderProps {
    children: ReactNode;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};


const Slider: React.FC<SliderProps> = ({
    children,
    autoPlay = true,
    autoPlayInterval = 5000,
}) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const childrenArray = React.Children.toArray(children);
const constraintsRef = useRef<HTMLDivElement>(null);

    const paginate = (newDirection: number) => {
        setPage([
            (page + newDirection + childrenArray.length) % childrenArray.length,
            newDirection,
        ]);
    };
    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                paginate(1);
            }, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [page, autoPlay, autoPlayInterval, childrenArray.length]);
    return (
        <section className="h-screen flex justify-center">
            <div
                className="relative h-full w-11/12 overflow-hidden"
                ref={constraintsRef}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={constraintsRef}
                        dragElastic={1}
                        onDragEnd={(event, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            if (swipe < -1000) {
                                paginate(1);
                            } else if (swipe > 1000) {
                                paginate(-1);
                            }
                        }}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.7 },
                        }}
                        className="absolute w-full h-full flex justify-center items-center">
                        {childrenArray[page]}
                    </motion.div>
                </AnimatePresence>
                <div
                    className="absolute hidden top-1/2 left-4 transform duration-200 hover:bg-slate-200 -translate-y-1/2 z-10 sm:flex items-center justify-center w-10 h-10 bg-white bg-opacity-75 rounded-full cursor-pointer md:left-2"
                    onClick={() => paginate(-1)}>
                    <RiArrowLeftWideFill />
                </div>
                <div
                    className="hidden  absolute top-1/2 right-4 transform duration-200 hover:bg-slate-200 -translate-y-1/2 z-10 sm:flex items-center justify-center w-10 h-10 bg-white bg-opacity-75 rounded-full cursor-pointer md:right-2"
                    onClick={() => paginate(1)}>
                    <RiArrowRightWideLine />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {childrenArray.map((_, index) => (
                        <div
                            key={index}
                            className={`w-6 h-2 duration-1000 rounded-full cursor-pointer transition-transform ${
                                index === page
                                    ? "bg-green-600 w-9"
                                    : "bg-gray-500"
                            }`}
                            onClick={() =>
                                setPage([index, index > page ? 1 : -1])
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
