
import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

import Container from "@/components/container/Containers";
import Billboard from "@/components/database/Billboard";
import ProductList from "@/components/database/ProductList";

export const revalidate = 0;

const StorePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("1fe8a661-c26e-49b4-b221-905aa29cf357");
  return ( 
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
 
export default StorePage;