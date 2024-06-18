import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";


const components = [ComponentA, ComponentB, ComponentC, ComponentD];

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const Slider: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const Component = components[page];

    const paginate = (newDirection: number) => {
        setPage([
            (page + newDirection + components.length) % components.length,
            newDirection,
        ]);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                    }}
                    className="absolute w-full h-full flex justify-center items-center">
                    <Component />
                </motion.div>
            </AnimatePresence>
            <div
                className="absolute top-1/2 left-0 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-75 rounded-full cursor-pointer"
                onClick={() => paginate(-1)}>
                {"<"}
            </div>
            <div
                className="absolute top-1/2 right-0 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-75 rounded-full cursor-pointer"
                onClick={() => paginate(1)}>
                {">"}
            </div>
        </div>
    );
};

export default Slider;
