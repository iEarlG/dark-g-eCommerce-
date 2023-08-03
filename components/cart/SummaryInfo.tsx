"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import useCartModal from "@/hooks/useCartModal";
import Button from "@/components/container/Buttons";
import CurrencyTag from "@/components/container/CurrencyTag";

const SummaryInfo = () => {
    const searchParams = useSearchParams();
    const items = useCartModal((state) => state.items);
    const removeAll = useCartModal((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Checkout success");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Checkout canceled");
        };
    }, [searchParams, removeAll]);

   const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
   }, 0);

   const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: items.map((item) => item.id),
    });

    window.location = response.data.url;
   }
    
    return ( 
        <div className="rounded-lg bg-gray-50 px-4 py-6 lg:col-span-5 mt-16 lg:mt-0 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <CurrencyTag value={totalPrice} />
                </div>
            </div>
            <Button className="w-full mt-6" onClick={onCheckout} disabled={items.length === 0}>
                Checkout
            </Button>
        </div>
    );
}
 
export default SummaryInfo;