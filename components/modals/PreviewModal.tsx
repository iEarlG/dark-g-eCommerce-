"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import Modal from "@/components/modals/Modal";
import ItemGallery from "@/components/gallery/ItemGallery";
import ProductInfo from "@/components/ProductInfo";

const PreviewModal = () => {
    const previewModal = usePreviewModal();
    const product = usePreviewModal((state) => state.data);

    if (!product) {
        return null;
    };

    return ( 
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}
        >
            <div className="grid w-full items-start grid-cols-1 sm:grid-cols-12 lg:gap-x-8 gap-x-8 gap-y-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <ItemGallery images={product.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <ProductInfo data={product} />
                </div>
            </div>
        </Modal>
    );
}
 
export default PreviewModal;