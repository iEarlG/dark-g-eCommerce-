"use client";

import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Product } from "@/utils/types";

import IconButton from "@/components/container/IconButton";
import CurrencyTag from "@/components/container/CurrencyTag";

import usePreviewModal from "@/hooks/usePreviewModal";
import useCartModal from "@/hooks/useCartModal";

export const revalidate = 0;
interface ProductCardsProps {
    data: Product;
}

const ProductCards: React.FC<ProductCardsProps> = ({
    data
}) => {
    const router = useRouter();
    const previewModal = usePreviewModal();
    const cart = useCartModal();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreviewProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCartProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItems(data);
    };

    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" onClick={handleClick}>
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
                            onClick={onPreviewProduct}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={onAddToCartProduct}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category.name}</p>
            </div>
            <div className="flex items-center justify-between">
                <CurrencyTag value={data.price} />
            </div>
        </div>
    );
}
 
export default ProductCards;