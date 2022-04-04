import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useNavigate, useLocation } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss'




const Cart = ({cartItems, history, dispatch}) => {

    const navigate = useNavigate();

    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                    cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))
                :
                <span className="empty-message">Your Cart is empty</span>
            }
            
        </div>
        <CustomButton onClick={() => {navigate('/checkout');
        dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


// we can directly use dispatch in in above cart function without writing mapDispatchToProps.
export default connect(mapStateToProps)(Cart);