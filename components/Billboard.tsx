
import { Billboard as BillboardTypes } from "@/utils/types";

interface BillboardProps {
    data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return ( 
        <div className="rounded-xl p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div 
                className="relative rounded-xl aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="sm:max-w-xl max-w-xs font-bold text-3xl sm:text-5xl lg:text-6xl">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Billboard;