import React from "react";
import { motion } from "motion/react";

export const MotionBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Boxes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`box-${i}`}
          className="absolute bg-logo-blue/5 dark:bg-logo-blue/10 rounded-3xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
        <pattern
          id="grid-lines"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-logo-blue/30"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-lines)" />
        
        {/* Animated Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="0"
            y1={`${20 + i * 20}%`}
            x2="100%"
            y2={`${20 + i * 20}%`}
            stroke="currentColor"
            strokeWidth="1"
            className="text-logo-blue/20"
            animate={{
              x1: ["-100%", "100%"],
              x2: ["0%", "200%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </svg>

      {/* Subtle Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-logo-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
    </div>
  );
};
