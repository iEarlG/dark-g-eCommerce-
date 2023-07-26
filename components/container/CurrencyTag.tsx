"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

interface CurrencyTagProps {
    value?: string | number;
};

const CurrencyTag: React.FC<CurrencyTagProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return ( 
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}
 
export default CurrencyTag;