"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/utils/types";

import CurrencyTag from "@/components/container/CurrencyTag";
import Button from "@/components/container/Buttons";

interface ProductInfoProps {
    data: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
    data
}) => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="flex items-end justify-between mt-3">
                <p className="text-xl text-gray-500">
                    <CurrencyTag value={data.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>{data?.size?.name}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ background: data?.color?.value }} />
                </div>
            </div>
            <div className="flex items-center mt-10 gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}
 
export default ProductInfo;