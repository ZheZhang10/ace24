
export const metadata = {
    title: 'Pricing',
    description: 'Pricing Table',
}

import Link from "next/link";
import PricingCard from "@/components/pricing/pricing-card";

export default function PricingPage() {
return(
    <div className="relative mt-10">
        {/* Section header */}
        <div className="mx-auto text-center pb-10 md:pb-10 mt-20">
            <h1 className="h2 mb-4">Pricing Plan</h1>
            <p className="text-xl text-green-780">A suprising gift for loyal users will be given by subscribing Standard and Unlimited Plan</p>
          </div>
        <PricingCard></PricingCard>
    </div>
    
);
}

