import * as React from "react";


const PricingCard =() =>{
    return(
        <div>
            {/* stripe pring table */}
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table pricing-table-id="prctbl_1NFyFEDvhuLYKoCjNDR5Ko8U"
                publishable-key="pk_live_51MxQEQDvhuLYKoCjwZH5J7BHbgJT4FOpOKU1mgo9fFj86rs4WsBGI2BlHhBRFSypMT6tPr5o16knSD39wZcy8G4d00vF0NiO0b">
            </stripe-pricing-table>
        </div>
        
    )
}

export default PricingCard;