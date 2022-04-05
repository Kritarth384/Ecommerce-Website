import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
     const priceForStripe = price * 100;
     const publishableKey = 'pk_test_51KlDMuSGEzWH42sGBneoBFpijtuymEoODIweUhFYjuhpseYjpihUjybEpT5z9cTjFatIhpHfNAtocUfHzUY5wR1X00J7v7KpyV';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

     return (
         <StripeCheckout
            label="Pay Now"
            name='YOURS CLOTHING Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
          />
     )
}

export default StripeCheckoutButton;