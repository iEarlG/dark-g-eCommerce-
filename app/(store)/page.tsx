
import getBillboard from "@/actions/getBillboard";

import Billboard from "@/components/Billboard";
import Container from "@/components/container/Containers";

export const revalidate = 0;

const StorePage = async () => {
  const billboard = await getBillboard("1fe8a661-c26e-49b4-b221-905aa29cf357");
  return ( 
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
 
export default StorePage;