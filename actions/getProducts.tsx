import qs from "query-string";

import { Product } from "@/utils/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryProducts {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: QueryProducts): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    })
    const res = await fetch(URL);

    return res.json();
}

export default getProducts;