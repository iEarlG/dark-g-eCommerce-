
import ProductList from "@/components/database/ProductList";
import getIndividualProducts from "@/actions/getIndividualProducts";
import getProducts from "@/actions/getProducts";

import Container from "@/components/container/Containers";
import ItemGallery from "@/components/gallery/ItemGallery";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product = await getIndividualProducts(params.productId);

    const productSuggested = await getProducts({
        categoryId: product?.category?.id,
    });

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 py-10">
                    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8">
                        <ItemGallery images={product.images} />
                        <div className="mt-10 sm:mt-16 lg:mt-0 px-4 sm:p-0">
                            <div>Info</div>
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Relative Items" items={productSuggested} />
                </div>
            </Container>
        </div>
    );
}
 
export default ProductPage;