"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagicCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a"
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
            >
                <motion.div
                    animate={{
                        scale: isPointer ? 1.5 : 1,
                        opacity: isPointer ? 0.4 : 1,
                    }}
                    className="w-full h-full bg-white rounded-full flex items-center justify-center"
                >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </motion.div>
            </motion.div>

            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[99] blur-md"
            >
                <motion.div
                    animate={{
                        scale: isPointer ? 2 : 1,
                        backgroundColor: isPointer ? "rgba(255, 255, 0, 0.4)" : "rgba(255, 255, 0, 0.15)",
                    }}
                    className="w-full h-full rounded-full"
                />
            </motion.div>
        </>
    );
}
