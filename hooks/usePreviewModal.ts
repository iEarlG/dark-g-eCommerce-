
import { create } from "zustand";
import { Product } from "@/utils/types";

interface PreviewModalState {
    data?: Product;
    isOpen: boolean;
    onOpen: (data: Product) => void;
    onClose: () => void;
};

const usePreviewModal = create<PreviewModalState>((set) => ({
    data: undefined,
    isOpen: false,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;