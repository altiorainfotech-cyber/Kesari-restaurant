"use client";

import Image from "next/image";
import { useState } from "react";
import sweetsData from "@/data/sweetsData.json";
import { Header, FooterSecondary } from "@/components/layout";

export default function SweetsPage() {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(
        Object.fromEntries(sweetsData.map(item => [item.id, 1]))
    );
    const [selectedWeights, setSelectedWeights] = useState<{ [key: number]: string }>(
        Object.fromEntries(sweetsData.map(item => [item.id, "1 kg"]))
    );

    const updateQuantity = (id: number, delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta)
        }));
    };

    const updateWeight = (id: number, weight: string) => {
        setSelectedWeights(prev => ({
            ...prev,
            [id]: weight
        }));
    };

    // Calculate alternating rows (4 items, then 3 items)
    const rows: { items: typeof sweetsData, isThree: boolean }[] = [];
    let i = 0;
    let currentItemsPerRow = 4;
    while (i < sweetsData.length) {
        rows.push({
            items: sweetsData.slice(i, i + currentItemsPerRow),
            isThree: currentItemsPerRow === 3
        });
        i += currentItemsPerRow;
        currentItemsPerRow = currentItemsPerRow === 4 ? 3 : 4;
    }

    return (
        <div
            className="min-h-screen relative font-inter bg-white"
            style={{
                backgroundImage: 'url("/images/sweets/bgsweets.png")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}
        >
            <Header />

            {/* Main Content */}
            <main className="relative pt-24 pb-32 min-h-screen overflow-x-hidden">


                <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">


                    {/* Sweets Alternating Flex Grid */}
                    <div className="flex flex-col gap-y-20">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex flex-wrap justify-center gap-16 w-full"
                            >
                                {row.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative bg-[#FFF4E1]/95 backdrop-blur-md rounded-[40px] p-5 pb-10 flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-orange-100/40 transform transition-transform duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-16px)] lg:w-[290px] flex-grow-0 flex-shrink-0"
                                    >

                                        {/* Image Holder */}
                                        <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden mb-4 shadow-sm bg-white">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="!font-oswald text-[16px] !font-normal !text-black mb-3 text-center h-[20px] flex items-center leading-tight">
                                            {item.name}
                                        </h3>

                                        {/* Weight Selector (for LB items) */}
                                        {item.unit === "lb" ? (
                                            <div className="flex gap-2 mb-4">
                                                {["250 g", "500 g", "1 kg"].map((weight) => (
                                                    <button
                                                        key={weight}
                                                        onClick={() => updateWeight(item.id, weight)}
                                                        className={`px-2.5 py-1 rounded-[8px] !font-oswald text-[10px] !font-normal transition-all bg-transparent !text-black border ${selectedWeights[item.id] === weight
                                                            ? "border-[#FF9900]"
                                                            : "border-[#D9D9D9]"
                                                            }`}
                                                    >
                                                        {weight}
                                                    </button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="h-[28px] mb-4 flex items-center">
                                                <span className="!font-oswald text-[10px] !font-normal text-gray-300 tracking-wider">Per piece</span>
                                            </div>
                                        )}

                                        {/* Price & Quantity Row */}
                                        <div className="flex justify-between items-center w-full px-1 mb-5">
                                            <span className="!font-oswald text-[16px] !font-normal text-black">
                                                CAD ${item.price.toFixed(2)}
                                            </span>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="bg-black text-white w-5 h-5 flex items-center justify-center text-[12px] font-bold rounded-[3px] hover:bg-gray-800 transition-colors shadow-sm"
                                                >
                                                    -
                                                </button>
                                                <span className="!font-inter text-[14px] font-bold text-black min-w-[16px] text-center">
                                                    {quantities[item.id]}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="bg-black text-white w-5 h-5 flex items-center justify-center text-[12px] font-bold rounded-[3px] hover:bg-gray-800 transition-colors shadow-sm"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Order Now Button - Overlapping Bottom Edge */}
                                        <button className="absolute bottom-0 translate-y-1/2 bg-[#FF9900] !font-oswald !text-black px-10 py-2.5 rounded-full text-[16px] !font-normal shadow-[0_6px_18px_rgba(255,153,0,0.35)] hover:bg-[#e68a00] hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 capitalize tracking-widest whitespace-nowrap z-20">
                                            Order Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Cart Bar - Positioned at bottom of section, touching right edge */}
                <div className="mt-20 flex justify-end">
                    <div className="w-full md:w-[35%] lg:w-[30%] bg-[#FF9900] text-black py-4 px-10 flex justify-between items-center shadow-lg rounded-l-[30px] z-10">
                        <div className="!font-oswald text-[14px] !font-normal tracking-wide">
                            1 Item Added
                        </div>
                        <button className="group !font-oswald text-[14px] !font-normal flex items-center gap-3 hover:translate-x-1 transition-all">
                            View Cart <span className="text-[18px]">›</span>
                        </button>
                    </div>
                </div>
            </main>

            <FooterSecondary />
        </div>
    );
}
