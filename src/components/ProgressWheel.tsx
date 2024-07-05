'use client'

import { motion, useScroll, useSpring } from 'framer-motion';
import { FC } from 'react';

const ProgressWheel: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-700 origin-left" style={{ scaleX }} />
  );
};

export default ProgressWheel;

