
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import getIndividualCategory from "@/actions/getIndividualCategory";

import MobileFilters from "@/components/category/MobileFilters";
import Filters from "@/components/category/Filters";
import Billboard from "@/components/database/Billboard";
import Container from "@/components/container/Containers";
import NoResults from "@/components/container/NoResults";
import ProductCards from "@/components/container/ProductCards";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getIndividualCategory(params.categoryId);

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    return ( 
        <div className="bg-white">
            <Container>
                <Billboard 
                    data={category.billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
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
                        <div className="mt-6 lg:mt-0 lg:col-span-4">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCards 
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default CategoryPage;