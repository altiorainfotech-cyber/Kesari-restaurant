"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface CartItem {
    cartKey: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    weight?: string;
    source: "order" | "sweet";
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (cartKey: string) => void;
    updateQuantity: (cartKey: string, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number;
    totalItems: number;
    isLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("kesari_cart");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from localStorage", error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("kesari_cart", JSON.stringify(cartItems));
        }
    }, [cartItems, isLoaded]);

    const addToCart = (item: CartItem) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.cartKey === item.cartKey);
            if (existing) {
                return prev.map(i =>
                    i.cartKey === item.cartKey
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (cartKey: string) => {
        setCartItems(prev => prev.filter(i => i.cartKey !== cartKey));
    };

    const updateQuantity = (cartKey: string, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(prev =>
            prev.map(i =>
                i.cartKey === cartKey ? { ...i, quantity } : i
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalPrice,
            totalItems,
            isLoaded
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
