"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, FooterSecondary } from "@/components/layout";
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

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, totalPrice, isLoaded } = useCart();

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-white relative font-inter">
                <Header />
                <main className="relative pt-52 pb-20 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF9900]"></div>
                </main>
                <FooterSecondary />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white relative font-inter">
            <Header />

            <main className="relative pt-52 pb-20">
                {/* Background Pattern - only behind main content */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/cart-page/cart-bg.png')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "100% auto",
                        backgroundPosition: "center top",
                    }}
                />
                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1100px]">

                    {/* Empty Cart State */}
                    {cartItems.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 gap-6">
                            <p className="!font-oswald text-[20px] !font-normal text-gray-400">Your cart is empty</p>
                            <Link href="/order" className="bg-[#FF9900] !font-oswald text-black px-10 py-3 rounded-full text-[18px] !font-normal hover:bg-[#e68a00] hover:scale-105 active:scale-95 transition-all duration-300">
                                Browse Menu
                            </Link>
                        </div>
                    )}

                    {/* Cart Items */}
                    {cartItems.length > 0 && (
                        <>
                            <div className="flex flex-col gap-6">
                                {cartItems.map((item) => (
                                    <div key={item.cartKey}>
                                        {/* Cart Item Card */}
                                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">

                                            {/* Item Card */}
                                            <div className="flex-1 w-full bg-[#FFEBCE] rounded-[20px] p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-visible">

                                                {/* Product Image */}
                                                <div className="relative w-full sm:w-[160px] md:w-[180px] h-[140px] sm:h-[120px] md:h-[130px] rounded-[15px] overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between flex-1 w-full gap-4">
                                                    <div className="text-center sm:text-left">
                                                        <h3 className="!font-inter text-[16px] md:text-[18px] !font-semibold !text-black">
                                                            {item.name}
                                                        </h3>
                                                        {item.weight && (
                                                            <p className="text-[13px] text-gray-500 mt-1 border-l-2 border-gray-400 pl-2">
                                                                {item.weight}
                                                            </p>
                                                        )}
                                                        <p className="!font-inter text-[15px] !font-semibold !text-black mt-2">
                                                            CAD ${item.price.toFixed(2)}
                                                        </p>
                                                    </div>

                                                    {/* Quantity, Delete & Total */}
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="flex items-center gap-4">
                                                            {/* Quantity Controls */}
                                                            <div className="flex items-center gap-3">
                                                                <button
                                                                    onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                                                                    className="bg-black text-white w-6 h-6 flex items-center justify-center text-[14px] font-bold rounded-[3px] hover:bg-black/80 transition-colors"
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="!font-oswald text-[14px] !font-normal text-black min-w-[12px] text-center">
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                                                                    className="bg-black text-white w-6 h-6 flex items-center justify-center text-[14px] font-bold rounded-[3px] hover:bg-black/80 transition-colors"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>

                                                            {/* Delete */}
                                                            <button
                                                                onClick={() => removeFromCart(item.cartKey)}
                                                                className="text-black hover:text-red-600 transition-colors"
                                                                aria-label="Remove item"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* Item Total */}
                                                        <div className="flex items-center gap-3">
                                                            <span className="!font-oswald text-[18px] !font-normal text-black">Total</span>
                                                            <span className="!font-oswald text-[18px] !font-normal text-black">
                                                                CAD ${(item.price * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add Items Button */}
                                            <Link href="/order" className="bg-[#FF9900] !font-oswald text-black px-8 py-3 rounded-full text-[18px] !font-normal hover:bg-[#e68a00] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap flex-shrink-0">
                                                Add Items
                                            </Link>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            {/* To Pay Section */}
                            <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 lg:gap-6 mt-10 mb-12">
                                <div className="flex-1 w-full flex justify-center lg:justify-end items-center gap-4">
                                    <span className="!font-oswald text-[18px] !font-normal text-black">
                                        To Pay
                                    </span>
                                    <Link href="/checkout" className="bg-[#FF9900] text-black px-6 py-2.5 rounded-full !font-oswald text-[16px] !font-normal shadow-md hover:bg-[#e68a00] transition-all">
                                        CAD ${totalPrice.toFixed(2)}
                                    </Link>
                                </div>
                                {/* Spacer to match Add Items button width */}
                                <div className="hidden lg:block px-8 py-3 text-[18px] invisible">Add Items</div>
                            </div>

                            {/* Payment Section */}
                            <div className="bg-[#f5f5f5] rounded-[20px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center gap-6">
                                {/* Pay Using Button */}
                                <button className="bg-[#FF9900] text-black px-6 py-2.5 rounded-full !font-oswald text-[15px] !font-normal flex items-center gap-2 shadow-md hover:bg-[#e68a00] transition-colors flex-shrink-0">
                                    Pay Using
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Payment Icons */}
                                <div className="flex items-center gap-3 md:gap-5 flex-wrap justify-center">
                                    {paymentIcons.map((icon) => (
                                        <div
                                            key={icon.alt}
                                            className="relative w-[45px] h-[30px] md:w-[55px] md:h-[35px] flex-shrink-0"
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
                        </>
                    )}

                </div>
            </main>

            <FooterSecondary />
        </div>
    );
}
