"use client";

import Image from "next/image";
import { toast } from "react-hot-toast"
import { TrashIcon } from "lucide-react";

import { Product } from "@/utils/types";

import useCartModal from "@/hooks/useCartModal";

import IconButton from "@/components/container/IconButton";
import CurrencyTag from "../container/CurrencyTag";

interface CartItemsProps {
    data: Product;
};

const CartItems: React.FC<CartItemsProps> = ({
    data
}) => {
    const cart = useCartModal();

    const onRemovedItems = () => {
        cart.removeItems(data.id);
    };

    return ( 
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 sm:h-48 sm:w-48 rounded-md overflow-hidden aspect-square bg-gray-100">
                <Image 
                    alt="Cart Images"
                    src={data.images[0].url}
                    className="object-cover object-center"
                    fill
                />
            </div>
            <div className="relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
                <div className="absolute z-10 top-0 right-0">
                    <IconButton onClick={() => onRemovedItems()} icon={<TrashIcon size={16} />} />
                </div>
                <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 pr-10 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-neutral-900">{data.name}</p>
                    </div>
                    <CurrencyTag value={data.price} />
                </div>
                <div className="flex mt-1 text-sm">
                    <p className="text-gray-500">{data.color.name}</p>
                    <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                </div>
            </div>
        </li>
    );
}
 
export default CartItems;