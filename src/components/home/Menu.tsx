"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Menu() {
    const categories = [
        {
            name: "Appetizers",
            icon: "/images/home-page/herosection/menu/appetizers 1.png",
            bgText: ["Appeti", "zers"],
            image: "/images/home-page/herosection/menu/apitserslider image.png",
            description: "Delicious Appetizers To Awaken Your Taste Buds And Start The Meal Right."
        },
        {
            name: "Main Course Non-Veg",
            icon: "/images/home-page/herosection/menu/Main Course Non-Veg.png",
            bgText: ["Non-", "Veg"],
            image: "/images/home-page/herosection/menu/non-vageslider-image.png",
            description: "Savor our selection of premium non-vegetarian main courses, slow-cooked to perfection."
        },
        {
            name: "Main Course Veg",
            icon: "/images/home-page/herosection/menu/Main Course Veg.png",
            bgText: ["Main", "Veg"],
            image: "/images/home-page/herosection/menu/veg-slider-image .png",
            description: "A rich array of vegetarian delights, prepared with fresh ingredients and traditional spices."
        },
        {
            name: "Dessert",
            icon: "/images/home-page/herosection/menu/Dessert.png",
            bgText: ["Des", "sert"],
            image: "/images/home-page/herosection/menu/desert-slider-image.png",
            description: "End your journey on a sweet note with our handcrafted, traditional Indian desserts."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % categories.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(timer);
    }, [categories.length]);

    const activeCategory = categories[activeIndex];

    return (
        <section className="relative py-20 bg-white overflow-hidden min-h-[700px] flex flex-col items-center">
            {/* Faded Background Image */}
            <div className="absolute inset-0 opacity-100 pointer-events-none z-0">
                <Image
                    src="/images/home-page/herosection/menu/background.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Food Menu Title */}
                <div className="text-center mb-16">
                    <h2 className="!font-oswald text-[48px] md:text-[60px] !font-normal text-[#FF9900] leading-none mb-4">
                        Food Menu
                    </h2>
                </div>

                {/* Category Icons Row */}
                <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-8 md:gap-x-12 mb-16 lg:mb-24 w-full max-w-5xl px-4">
                    {categories.map((cat, index) => (
                        <div key={cat.name} className="flex items-center gap-4 md:gap-8">
                            <div
                                className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-300 min-w-[100px]"
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className={`relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                                    <Image
                                        src={cat.icon}
                                        alt={cat.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className={`!font-oswald text-[18px] md:text-[22px] lg:text-[24px] !font-normal whitespace-nowrap transition-colors duration-300 ${activeIndex === index ? '!text-[#FF9900]' : '!text-black'}`}>
                                    {cat.name}
                                </h3>
                            </div>
                            {index < categories.length - 1 && (
                                <div className="hidden md:block w-[1px] h-10 bg-gray-300 mt-2"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Image and Info */}
                <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 transition-opacity duration-500 py-10 lg:py-0">

                    {/* Background Text (Protest Revolution) - Scaled for responsiveness */}
                    <div className="absolute left-[5%] lg:left-[-2%] top-[5%] lg:top-1/2 lg:-translate-y-1/2 z-0 transition-all duration-700 ease-in-out opacity-40 lg:opacity-90 pointer-events-none">
                        <span className="!font-protest text-[60px] md:text-[100px] lg:text-[150px] !font-normal text-[#FF9900] leading-[0.8] tracking-widest capitalize block whitespace-nowrap">
                            {activeCategory.bgText[0]}<br />{activeCategory.bgText[1]}
                        </span>
                    </div>

                    {/* Left Side: Circular Image */}
                    <div className="relative z-10">
                        <div className="relative w-[220px] h-[220px] md:w-[259px] md:h-[259px] rounded-full overflow-hidden shadow-2xl ring-1 ring-gray-100 transition-transform duration-700 ease-in-out hover:scale-105">
                            <Image
                                src={activeCategory.image}
                                alt={activeCategory.name}
                                fill
                                className="object-cover"
                                key={activeCategory.image}
                            />
                        </div>
                        {/* Small Orange Moon Shape */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-[#FF9900] rounded-full flex items-center justify-center z-20 shadow-md">
                            <div className="w-5 h-5 md:w-6 md:h-6 border-[2px] md:border-[3px] border-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Side: Description and Button */}
                    <div className="relative z-10 flex flex-col items-center lg:items-start max-w-sm md:max-w-md text-center lg:text-left transition-all duration-500 px-4">
                        <p className="!font-inter text-[16px] md:text-[18px] lg:text-[20px] !font-normal text-black leading-[1.6] mb-8 min-h-[auto] lg:min-h-[90px]">
                            {activeCategory.description}
                        </p>
                        <button className="bg-[#FF9900] !font-oswald text-[14px] md:text-[16px] !font-normal text-white px-10 py-3.5 rounded-[35px] hover:bg-[#e68a00] hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest shadow-lg shadow-orange-200">
                            Explore Menu
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
