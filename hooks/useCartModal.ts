
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { Product } from "@/utils/types";

interface CartModalState {
    items: Product[];
    addItems: (data: Product) => void;
    removeItems: (id: string) => void;
    removeAll: () => void;
};

const useCartModal = create(persist<CartModalState>((set, get) => ({
    items: [],
    addItems: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
            return toast.error("Item already added to cart");
        }

        set({items: [...get().items, data]});
        toast.success("Item added to cart");
    },
    removeItems: (id: string) => {
        set({items: [...get().items.filter((item) => item.id !== id)]});
        toast.success("Item removed from cart");
    },
    removeAll: () => {
        set({items: []});
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}));

export default useCartModal;