"use client";

import Image from "next/image";
import { useState } from "react";
import orderData from "@/data/orderData.json";
import { Header, Footer } from "@/components/layout";

export default function OrderPage() {
    const [activeCategory, setActiveCategory] = useState("Appetizers");
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(
        Object.fromEntries(orderData.items.map(item => [item.id, 1]))
    );

    const filteredItems = orderData.items.filter(item => item.category === activeCategory);

    const updateQuantity = (id: number, delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,#FFEBCE,#ffffff)] relative font-inter">
            <Header />

            <main className="pt-36 pb-32">
                <div className="container mx-auto px-4 md:px-8">

                    {/* Categories Tab */}
                    <div className="flex overflow-x-auto lg:justify-center gap-3 py-8 no-scrollbar scroll-smooth mb-12">
                        {orderData.categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`flex-shrink-0 px-6 py-2 rounded-full !font-oswald text-[14px] !font-normal transition-all duration-300 bg-[#FF9900] shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 ${activeCategory === category
                                    ? "text-white"
                                    : "text-black"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Food Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative flex flex-col items-center">

                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/11] rounded-[40px] overflow-hidden shadow-2xl mb-[-50px] transition-transform duration-500 group-hover:scale-[1.02]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                {/* Info Card (Floating) */}
                                <div className="relative z-10 w-[88%] bg-white rounded-[25px] px-5 pt-5 pb-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="!font-inter text-[14px] !font-medium !text-black mb-3 leading-tight">
                                        {item.name}
                                    </h3>

                                    <div className="flex justify-between items-center w-full mb-2">
                                        <span className="!font-inter text-[14px] !font-medium !text-black font-semibold">
                                            CAD ${item.price.toFixed(2)}
                                        </span>

                                        {/* Quantity Selector - Matching Screenshot */}
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="bg-black text-white w-5 h-5 flex items-center justify-center text-[12px] font-bold rounded-[2px] hover:bg-black/80 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="!font-inter text-[13px] font-medium text-black min-w-[12px] text-center">
                                                {quantities[item.id]}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="bg-black text-white w-5 h-5 flex items-center justify-center text-[12px] font-bold rounded-[2px] hover:bg-black/80 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Order Button - Positioned half-way on the bottom edge */}
                                    <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#FF9900] !font-oswald text-white px-10 py-2.5 rounded-full text-[14px] !font-normal shadow-lg hover:bg-[#e68a00] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap z-20">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Cart Bar - Touches the right edge of the screen */}
                <div className="mt-20 flex justify-end pb-8">
                    <div className="w-full md:w-[35%] lg:w-[30%] bg-[#FF9900] text-black py-4 px-10 flex justify-between items-center shadow-lg rounded-l-[30px]">
                        <div className="!font-oswald text-[14px] !font-normal tracking-wide">
                            1 Item Added
                        </div>
                        <button className="group !font-oswald text-[14px] !font-normal flex items-center gap-3 hover:translate-x-1 transition-all text-black">
                            View Cart <span className="text-[18px]">›</span>
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
