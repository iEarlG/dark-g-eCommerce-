
import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageTypes } from "@/utils/types";

interface GalleryTabProps {
    image: ImageTypes;
};

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return ( 
        <Tab className="relative flex aspect-square items-center justify-center rounded-md bg-white cursor-pointer">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image 
                            alt="Product Image"
                            src={image.url}
                            fill
                            className="object-cover object-center"
                        />
                    </span>
                    <span 
                        className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-black" : "ring-transparent"
                        )}
                    />
                </div>
            )}
        </Tab>
    );
}
 
export default GalleryTab;