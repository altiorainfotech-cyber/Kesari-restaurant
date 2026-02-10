"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeftDecorativeImage() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute left-0 top-[-161px] w-[200px] pointer-events-none z-20"
        >
            <Image
                src="/images/home-page/herosection/leftsideimage.png"
                alt="Decorative spices"
                width={200}
                height={400}
                className="w-full h-auto object-contain"
            />
        </motion.div>
    );
}
