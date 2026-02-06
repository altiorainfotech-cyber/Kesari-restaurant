"use client";

import Image from "next/image";
import { SITE_NAME } from "@/constants";
import { useState } from "react";

const reviews = [
  {
    name: "Lawrence Salaver",
    role: "Regular Customer",
    image: "/images/home-page/herosection/Customer-Experiences/Mask group.png",
    review: "A beautiful ambient and interior. Great space for a setting and pool table for more fun. Staff was very friendly and well trained.",
    rating: 5
  },
  {
    name: "Anita Sharma",
    role: "Food Enthusiast",
    image: "/images/home-page/herosection/Customer-Experiences/Mask group (1).png",
    review: "The authenticity of the flavors here is unmatched. Every dish feels like it was made with love and traditional secrets. Highly recommend the sweets!",
    rating: 5
  },
  {
    name: "John David",
    role: "Local Guide",
    image: "/images/home-page/herosection/Customer-Experiences/Mask group (2).png",
    review: "Best Indian spot in Surrey! The service is quick and the atmosphere is perfect for family dinners. Don't miss their signature Biryani.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "First-time Visitor",
    image: "/images/home-page/herosection/Customer-Experiences/image 91.png",
    review: "Coming here was a delightful experience. The portions are generous and the spice levels are just right. Will definitely be coming back soon.",
    rating: 5
  }
];

export default function Footer() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <footer>
      {/* Main Footer Section with Background Image */}
      <div
        className="bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/images/footer/background.png')" }}
      >
        {/* Customer Experiences Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Left Side - Title and Food Images */}
              <div className="w-full lg:w-[45%]">
                <h2 className="!font-inter text-[36px] md:text-[48px] !font-normal !text-black lg:!text-title mb-6 leading-tight">
                  Customer Experiences
                </h2>

                {/* Food Thumbnails - Interactive Slider */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {reviews.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveReview(index)}
                      className={`relative w-[80px] sm:w-[107px] h-[32px] sm:h-[38px] rounded-[16px] overflow-hidden shadow-sm transition-all duration-300 ${activeReview === index
                          ? "ring-2 ring-[#FF9900] scale-105"
                          : "opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={item.image}
                        alt={`Review from ${item.name}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Customer Review (Dynamic Content) */}
              <div className="w-full lg:w-[55%] pt-2 transition-all duration-500 ease-in-out">
                <div className="mb-4">
                  <h3 className="!font-inter text-[22px] md:text-[24px] !font-normal !text-black leading-tight">
                    {reviews[activeReview].name}
                  </h3>
                  <p className="text-sm text-black opacity-70">{reviews[activeReview].role}</p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(reviews[activeReview].rating)].map((_, i) => (
                      <span key={i} className="text-[#FF9900] text-sm">★</span>
                    ))}
                  </div>
                </div>

                <p className="font-inter text-base md:text-lg text-foreground leading-relaxed max-w-xl italic">
                  &quot;{reviews[activeReview].review}&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Come See Us Section */}
        <section className="pt-16 pb-6 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              {/* Left - Come See Us */}
              <div className="w-full lg:w-[30%]">
                <h2 className="!font-oswald text-[40px] md:text-[48px] !text-black lg:!text-white !font-normal mb-6 leading-none tracking-wide">
                  Come See Us
                </h2>

                {/* Social Icons */}
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FF9900] hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#3b5998] hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Center Group - Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 w-full lg:w-[70%]">
                {/* Middle - South Surrey */}
                <div className="flex flex-col gap-2">
                  <h3 className="!font-inter text-[20px] md:text-[22px] font-semibold !text-white border-b border-white/20 pb-1 mb-1 w-fit">
                    South Surrey
                  </h3>
                  <div className="space-y-1 !text-white !font-inter text-[16px] md:text-[18px] !font-normal opacity-90">
                    <p>604-560-9893</p>
                    <p>2-1990 152 Street, Surrey</p>
                    <a
                      href="mailto:kesarisweets152@gmail.com"
                      className="!text-white hover:text-[#FF9900] underline transition-colors block"
                    >
                      kesarisweets152@gmail.com
                    </a>
                  </div>
                </div>

                {/* Right - Langley */}
                <div className="flex flex-col gap-2">
                  <h3 className="!font-inter text-[20px] md:text-[22px] font-semibold !text-white border-b border-white/20 pb-1 mb-1 w-fit">
                    Langley
                  </h3>
                  <div className="space-y-1 !text-white !font-inter text-[16px] md:text-[18px] !font-normal opacity-90">
                    <p>604-514-3700</p>
                    <p>19475 Fraser Highway, Langley</p>
                    <a
                      href="mailto:kesarilangley@gmail.com"
                      className="!text-white hover:text-[#FF9900] underline transition-colors block"
                    >
                      kesarilangley@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="pt-3 pb-6 md:py-6 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs md:text-sm text-white/60 font-inter">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Designed with ❤️ for authentic flavours.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
