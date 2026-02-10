"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const paymentIcons = [
    { src: "/images/cart-page/visa 1.png", alt: "Visa" },
    { src: "/images/cart-page/mastercard 1.png", alt: "Mastercard" },
    { src: "/images/cart-page/interac 1.png", alt: "Interac" },
    { src: "/images/cart-page/jcb 1.png", alt: "JCB" },
    { src: "/images/cart-page/googlepay 1.png", alt: "Google Pay" },
    { src: "/images/cart-page/discover 1.png", alt: "Discover" },
    { src: "/images/cart-page/applepay 1.png", alt: "Apple Pay" },
    { src: "/images/cart-page/americanexpress 1.png", alt: "American Express" },
];

export default function CheckoutPage() {
    const { cartItems, totalPrice, totalItems, isLoaded } = useCart();
    const [payMethod, setPayMethod] = useState<"square" | "gpay">("square");
    const [tipIndex, setTipIndex] = useState<number | null>(null);
    const [saveCard, setSaveCard] = useState(false);
    const [emailOffers, setEmailOffers] = useState(false);
    const [showLearnMore, setShowLearnMore] = useState(false);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-white relative font-inter flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF9900]"></div>
            </div>
        );
    }

    const subtotal = totalPrice;
    const bagFee = totalPrice > 0 ? 0.25 : 0;
    const taxRate = 0.05;
    const taxes = parseFloat((subtotal * taxRate).toFixed(2));
    const tipOptions = [
        { label: "15%", amount: parseFloat((subtotal * 0.15).toFixed(2)) },
        { label: "20%", amount: parseFloat((subtotal * 0.20).toFixed(2)) },
        { label: "25%", amount: parseFloat((subtotal * 0.25).toFixed(2)) },
    ];
    const tip = tipIndex !== null && tipIndex < tipOptions.length ? tipOptions[tipIndex].amount : 0;
    const orderTotal = parseFloat((subtotal + bagFee + taxes + tip).toFixed(2));

    return (
        <div className="min-h-screen bg-white relative font-inter">
            <main className="relative pt-10 pb-20">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/cart-page/cart-bg.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "100% auto",
                        backgroundPosition: "center top",
                    }}
                />

                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[950px]">
                    {/* Title */}
                    <h1 className="!font-oswald text-[48px] !font-normal !text-black text-center mb-10">
                        Checkout
                    </h1>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                        {/* ============ LEFT COLUMN ============ */}
                        <div className="flex-1 min-w-0">

                            {/* Payment Method Tabs */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => setPayMethod("square")}
                                    className={`w-1/2 py-3 rounded-full !font-oswald text-[24px] !font-normal transition-all ${payMethod === "square"
                                        ? "bg-[#FF9900] text-black"
                                        : "bg-[#e0dcdb78] text-black"
                                        }`}
                                >
                                    Square Pay
                                </button>
                                <button
                                    onClick={() => setPayMethod("gpay")}
                                    className={`w-1/2 py-3 rounded-full transition-all flex items-center justify-center ${payMethod === "gpay"
                                        ? "bg-[#FF9900]"
                                        : "bg-[#e0dcdb78]"
                                        }`}
                                >
                                    <Image
                                        src="/images/cart-page/g-pay.png"
                                        alt="Google Pay"
                                        width={160}
                                        height={64}
                                        unoptimized
                                        className="object-contain w-[80px] h-[32px]"
                                    />
                                </button>
                            </div>
                            <div className="border-b border-black mb-8" />

                            {/* Contact Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-3 h-3 bg-[#FF0000] rounded-tl-[5px] rounded-br-[5px]" />
                                    <h2 className="!font-oswald text-[18px] !font-medium !text-[#FF9900]">Contact</h2>
                                </div>

                                <div className="flex gap-3 mb-3">
                                    <div className="flex items-center rounded-full px-5 py-3 bg-[#e0dcdb78] w-[160px]">
                                        <span className="text-[14px] text-black">+1 Canada</span>
                                        <svg className="w-4 h-4 ml-auto text-black" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="flex-1 rounded-full px-5 py-3 text-[14px] bg-[#e0dcdb78] text-black placeholder:text-black outline-none"
                                    />
                                </div>

                                <input
                                    type="email"
                                    placeholder="Email address for receipt"
                                    className="w-full rounded-full px-5 py-3 text-[14px] bg-[#e0dcdb78] text-black placeholder:text-black outline-none mb-3"
                                />

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="w-full sm:w-[160px] rounded-full px-5 py-3 text-[14px] bg-[#e0dcdb78] text-black placeholder:text-black outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="w-full sm:flex-1 rounded-full px-5 py-3 text-[14px] bg-[#e0dcdb78] text-black placeholder:text-black outline-none"
                                    />
                                </div>
                            </div>

                            <div className="border-b border-black mb-8" />

                            {/* Payment Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 bg-[#FF0000] rounded-tl-[5px] rounded-br-[5px]" />
                                    <h2 className="!font-oswald text-[18px] !font-medium !text-[#FF9900]">Payment</h2>
                                </div>
                                <p className="text-[13px] text-black mb-5">All transactions are secure and encrypted</p>

                                <div className="rounded-[20px] p-5 bg-white border border-black mb-5">
                                    <p className="text-[14px] text-black mb-4">Credit</p>
                                    <div className="flex items-center rounded-tl-[8px] rounded-br-[8px] px-5 py-3 bg-[#e0dcdb78] mb-3">
                                        <span className="text-[14px] text-black">Canada</span>
                                        <svg className="w-4 h-4 ml-auto text-black" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex rounded-tl-[8px] rounded-br-[8px] overflow-hidden bg-[#e0dcdb78]">
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            className="flex-1 px-5 py-3 text-[14px] text-black placeholder:text-black outline-none bg-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-[80px] px-4 py-3 text-[14px] text-black placeholder:text-black outline-none bg-transparent text-center"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            className="w-[70px] px-4 py-3 text-[14px] text-black placeholder:text-black outline-none bg-transparent text-center"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Square Pay Save */}
                            <div className="rounded-xl p-5 bg-[#e0dcdb78] mb-8">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={saveCard}
                                        onChange={(e) => setSaveCard(e.target.checked)}
                                        className="mt-1 w-4 h-4 accent-[#FF9900]"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                                <rect width="24" height="24" rx="4" fill="black" />
                                                <rect x="6" y="6" width="12" height="12" rx="2" fill="white" />
                                            </svg>
                                            <span className="text-[14px] font-semibold text-black">Square Pay</span>
                                        </div>
                                        <p className="text-[12px] text-gray-500 leading-relaxed">
                                            Save your payment info for faster reordering at Kesari and
                                            secure checkout anywhere you see the Square Pay logo.
                                        </p>
                                        <p className="text-[11px] text-black mt-2">
                                            By selecting Square Pay <span className="underline">Square buyer account terms</span> and <span className="underline">Privacy policy</span>.
                                        </p>
                                    </div>
                                </label>
                            </div>

                            <div className="border-b border-black mb-8" />

                            {/* Stay in Touch */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 bg-[#FF0000] rounded-tl-[5px] rounded-br-[5px]" />
                                    <h2 className="!font-oswald text-[18px] !font-medium !text-[#FF9900]">Stay in touch</h2>
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer mb-3">
                                    <input
                                        type="checkbox"
                                        checked={emailOffers}
                                        onChange={(e) => setEmailOffers(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 accent-[#FF9900]"
                                    />
                                    <p className="text-[13px] text-gray-600 leading-relaxed">
                                        Please send me email offers and promotions from Kesari Indian Sweets &
                                        Eats. 2-1990 152 Street Surrey BC V4A4N4 CA
                                    </p>
                                </label>
                                <button
                                    onClick={() => setShowLearnMore(!showLearnMore)}
                                    className="flex items-center gap-1 text-[13px] text-[#FF9900] underline cursor-pointer mb-4"
                                >
                                    Learn more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className={`w-4 h-4 transition-transform duration-300 ${showLearnMore ? "rotate-180" : ""}`}
                                    >
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {showLearnMore && (
                                    <p className="text-[11px] text-black leading-relaxed">
                                        Please ask this merchant for more information about their privacy practices. Your
                                        contact information is not visible to any other Square merchants unless you provide it
                                        directly to that merchant.
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* ============ RIGHT COLUMN ============ */}
                        <div className="w-full lg:w-[380px] flex-shrink-0">

                            {/* Pickup At */}
                            <div className="mb-6">
                                <h2 className="!font-oswald text-[18px] !font-medium !text-[#FF9900] mb-4">Pickup at</h2>

                                <div className="flex items-start gap-3 mb-3">
                                    <svg className="w-4 h-4 mt-0.5 text-black flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex-1">
                                        <p className="text-[14px] text-black font-medium">Kesari Indian Sweets & Eats</p>
                                        <p className="text-[13px] text-black">2-1990 152 Street Surrey BC V4A4N4 CA</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-4 h-4 text-black flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[14px] text-black">Today at 9:25 AM</p>
                                </div>
                                <div className="border-b border-black" />
                            </div>

                            {/* Order Summary */}
                            <div className="mb-6">
                                <div
                                    className="flex items-center justify-between cursor-pointer py-3 group"
                                    onClick={() => setIsSummaryOpen(!isSummaryOpen)}
                                >
                                    <h2 className="!font-oswald text-[16px] !font-medium !text-black">
                                        Order summary ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                                    </h2>
                                    <svg
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isSummaryOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ${isSummaryOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                    {cartItems.length > 0 && (
                                        <div className="mt-2 space-y-3">
                                            {cartItems.map((item) => (
                                                <div key={item.cartKey} className="flex justify-between text-[14px] text-black">
                                                    <span>{item.quantity}x {item.name} {item.weight ? `(${item.weight})` : ''}</span>
                                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="border-b border-black" />
                            </div>

                            {/* Note */}
                            <div className="mb-6">
                                <textarea
                                    placeholder="Add a note for the seller"
                                    rows={4}
                                    className="w-full rounded-[20px] px-5 py-3 text-[14px] bg-transparent border border-black text-black placeholder:text-black outline-none resize-none"
                                />
                            </div>

                            {/* Tip Section */}
                            <div className="mb-6">
                                <div className="border-b border-black mb-15" />
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {tipOptions.map((opt, i) => (
                                        <button
                                            key={opt.label}
                                            onClick={() => setTipIndex(tipIndex === i ? null : i)}
                                            className={`py-3 rounded-[10px] text-[13px] transition-all ${tipIndex === i
                                                ? "bg-[#FF9900] text-black"
                                                : "bg-[#e0dcdb78] text-black"
                                                }`}
                                        >
                                            <span className="font-semibold">{opt.label}</span>
                                            <br />
                                            <span className="text-[12px]">${opt.amount.toFixed(2)}</span>
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setTipIndex(3)}
                                        className={`py-3 rounded-[10px] text-[13px] transition-all ${tipIndex === 3
                                            ? "bg-[#FF9900] text-black"
                                            : "bg-[#e0dcdb78] text-black"
                                            }`}
                                    >
                                        Other
                                    </button>
                                </div>
                                <p className="text-[14px] text-black font-semibold text-center">Add a tip</p>
                                <div className="border-b border-black mt-3" />
                            </div>

                            {/* Order Breakdown */}
                            <div className="mb-6 space-y-3">
                                <div className="flex justify-between text-[14px] text-black">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-black">
                                    <span>Bag Fee</span>
                                    <span>${bagFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-black">
                                    <span>Taxes (GST)</span>
                                    <span>${taxes.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-black">
                                    <span>Tip</span>
                                    <span>${tip.toFixed(2)}</span>
                                </div>
                                <div className="border-b border-dashed border-black !mt-4" />
                                <div className="flex justify-between text-[16px] font-semibold text-black !mt-4">
                                    <span>Order total</span>
                                    <span>${orderTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Coupon */}
                            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-3 mb-6 cursor-pointer hover:border-[#FF9900] transition-colors">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.5 2A3.5 3.5 0 002 5.5v2.879a2.5 2.5 0 00.732 1.767l7.06 7.06a2.5 2.5 0 003.536 0l3.879-3.879a2.5 2.5 0 000-3.536l-7.06-7.06A2.5 2.5 0 008.38 2H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[14px] text-gray-500">Add coupon or gift card</span>
                            </div>

                            {/* Place Order Button */}
                            <button className="w-full bg-[#FF9900] text-black py-4 rounded-full !font-oswald text-[18px] !font-normal hover:bg-[#e68a00] transition-colors">
                                Place order ${orderTotal.toFixed(2)}
                            </button>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col items-center mt-16 gap-4">
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                                <rect width="24" height="24" rx="4" fill="black" />
                                <rect x="6" y="6" width="12" height="12" rx="2" fill="white" />
                            </svg>
                        </div>
                        <p className="text-[13px] text-gray-500">Secure checkout by Square</p>

                        {/* Payment Icons */}
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            {paymentIcons.map((icon) => (
                                <div
                                    key={icon.alt}
                                    className="relative w-[40px] h-[28px] flex-shrink-0"
                                >
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
