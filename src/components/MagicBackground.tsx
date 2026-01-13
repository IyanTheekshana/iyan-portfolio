"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagicBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Primary Aura */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"
            />

            {/* Secondary Aura */}
            <motion.div
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -80, 0],
                    scale: [1, 0.8, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[100px]"
            />

            {/* Tertiary Aura */}
            <motion.div
                animate={{
                    x: [0, 80, -100, 0],
                    y: [0, 150, -50, 0],
                    scale: [1, 1.1, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-violet-500/10 blur-[110px]"
            />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%"
                        }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            y: ["-10%", "110%"],
                            x: (Math.random() * 100 - 50) + "%"
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        className="absolute h-1 w-1 bg-primary rounded-full blur-[1px]"
                    />
                ))}
            </div>

            {/* Mesh Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
