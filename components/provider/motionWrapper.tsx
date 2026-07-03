"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperType {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof typeof motion;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

export default function MotionWrapper({
  children,
  className,
  id,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.5,
}: MotionWrapperType) {
  const Component = motion[as as keyof typeof motion] as React.ElementType;

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0 };
      case "down":
        return { y: -50, x: 0 };
      case "left":
        return { x: 50, y: 0 };
      case "right":
        return { x: -50, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <Component
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={className}
      id={id}
    >
      {children}
    </Component>
  );
}
