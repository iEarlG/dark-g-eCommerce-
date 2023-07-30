"use client";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";

import useCartModal from "@/hooks/useCartModal";
import Button from "@/components/container/Buttons";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCartModal();

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}
 
export default NavbarActions;