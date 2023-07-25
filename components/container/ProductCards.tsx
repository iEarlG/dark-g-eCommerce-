"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/utils/types";
import IconButton from "@/components/container/IconButton";

interface ProductCardsProps {
    data: Product;
}

const ProductCards: React.FC<ProductCardsProps> = ({
    data
}) => {
    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="relative aspect-square rounded-xl bg-gray-100">
                <Image 
                    alt="Product Image"
                    src={data?.images?.[0]?.url}
                    className="aspect-square rounded-md object-cover"
                    fill
                />
                <div className="w-full absolute opacity-0 group-hover:opacity-100 px-6 bottom-5 transition">
                    <div className="flex gap-x-8 justify-center">
                        <IconButton 
                            onClick={() => {}}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={() => {}}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCards;