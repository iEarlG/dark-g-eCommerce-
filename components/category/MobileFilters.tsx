"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import { Color, Size } from "@/utils/types";

import Filters from "@/components/category/Filters";

import Button from "@/components/container/Buttons";
import IconButton from "@/components/container/IconButton";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
};

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClosed = () => {
        setIsOpen(false);
    };

    return ( 
        <>
            <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={isOpen} onClose={onClosed} as="div" className="relative z-40 lg:hidden">
                <div className="flex inset-0 bg-black bg-opacity-25" />

                <div className="fixed flex inset-0 z-40">
                    <Dialog.Panel className="flex-col relative h-full w-full max-w-xs overflow-y-auto bg-white ml-auto py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClosed} />
                        </div>
                        <div className="p-4">
                            <Filters 
                                name="Sizes"
                                valueKey="sizeId"
                                data={sizes}
                            />
                            <Filters 
                                name="Colors"
                                valueKey="colorId"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
 
export default MobileFilters;