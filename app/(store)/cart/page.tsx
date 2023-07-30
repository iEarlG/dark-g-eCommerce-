"use client";

import { useEffect, useState } from "react";

import useCartModal from "@/hooks/useCartModal";

import Container from "@/components/container/Containers";
import CartItems from "@/components/cart/CartItems";
import { NoItems } from "@/components/container/NoResults";

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCartModal();

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <NoItems />}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItems 
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default CartPage;