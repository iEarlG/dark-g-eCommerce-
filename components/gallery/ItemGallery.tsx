"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageTypes } from "@/utils/types";
import GalleryTab from "@/components/gallery/GalleryTab";

interface ItemGalleryProps {
    images: ImageTypes[];
}

const ItemGallery: React.FC<ItemGalleryProps> = ({
    images
}) => {
    return ( 
        <Tab.Group
            as="div"
            className="flex flex-col-reverse"
        >
            <div className="mx-auto mx-w-2xl lg:max-w-none w-full mt-6 sm:block hidden">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-square">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="relative h-full w-full aspect-square sm:rounded-lg overflow-hidden">
                            <Image 
                                alt="Image Product"
                                src={image.url}
                                fill
                                className="object-cover object-center sm:rounded-lg"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}
 
export default ItemGallery;