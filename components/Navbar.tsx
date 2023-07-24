import Link from "next/link";

import Container from "@/components/container/Containers";
import Navigations from "@/components/Navigations";
import getCategories from "@/actions/getCategory";
import NavbarActions from "@/components/NavbarActions";

const Navbar = async () => {
    const categories = await getCategories();

    return ( 
        <div className="border-b">
            <Container>
                <div className="h-16 relative flex items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex lg:ml-0 ml-4 gap-x-2">
                        <p className="font-bold text-xl">DARK G</p>
                    </Link>
                    <Navigations data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}
 
export default Navbar;