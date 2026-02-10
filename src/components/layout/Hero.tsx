"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-[50] py-8 md:py-20 bg-white min-h-[700px] lg:min-h-screen flex flex-col items-center">
      {/* Background Wrapper - Clipping the 120% width curved background */}
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-[-10%] w-[120%] h-full">
          {/* Gradient Layer - Fades out as image appears */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
            className="absolute inset-0 bg-[linear-gradient(to_bottom,#FFF4E1_0%,#FF9900_100%)]"
            style={{
              borderBottomLeftRadius: "50% 25%",
              borderBottomRightRadius: "50% 25%",
            }}
          />

          {/* Background Image Layer - Fades in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/home-page/herosection/background main.png')",
              borderBottomLeftRadius: "50% 25%",
              borderBottomRightRadius: "50% 25%",
            }}
          >
            {/* subtle dimming overlay on top of image */}
            <div className="absolute inset-0 bg-black/5 lg:bg-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-40 md:pt-48 lg:pt-52 h-full min-h-screen flex flex-col items-center lg:items-start">
        {/* Top Section - Heading and Tagline Row */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 text-center lg:text-left">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <h1 className="font-oswald text-[40px] md:text-[55px] lg:text-[50px] font-bold leading-[1.1] uppercase tracking-wide">
              <span className="text-foreground drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none">Where </span>
              <span className="text-title drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none">Flavor </span>
              <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] lg:drop-shadow-none">Becomes</span>
              <br className="hidden lg:block" />
              <span className="text-foreground drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] lg:drop-shadow-none"> An Experience</span>
            </h1>
          </motion.div>

          {/* Desktop Tagline */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block max-w-xs text-right pt-8"
          >
            <p className="font-inter text-[18px] font-normal text-foreground leading-relaxed">
              Kesari – Best Indian Restaurant in Surrey for Authentic Sweets & Eats
            </p>
          </motion.div>
        </div>

        {/* Mobile Tagline Box - Visible only on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="lg:hidden text-center mt-12 px-4 pb-20"
        >
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-[30px] shadow-xl border border-white/50 max-w-md mx-auto">
            <p className="font-inter text-base md:text-lg font-medium text-black leading-relaxed">
              Kesari – Best Indian Restaurant in Surrey for Authentic Sweets & Eats
            </p>
          </div>
        </motion.div>
      </div>

      {/* Explore Menu Button - Centered and Overlapping the bottom edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-[-20px] md:bottom-[-13px] left-1/2 -translate-x-1/2 z-[110]"
      >
        <Link
          href="/order"
          className="inline-flex items-center justify-center px-12 md:px-16 py-3.5 md:py-4 bg-background-dark hover:bg-title text-white font-inter font-bold text-sm md:text-base rounded-full transition-all shadow-2xl hover:shadow-orange-300/50 hover:scale-105 active:scale-95 whitespace-nowrap uppercase tracking-widest"
        >
          Explore Menu
        </Link>
      </motion.div>
    </section>
  );
}
