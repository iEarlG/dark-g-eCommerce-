import { Product } from "@/utils/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getIndividualProducts = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getIndividualProducts;