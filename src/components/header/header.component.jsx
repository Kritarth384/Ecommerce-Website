import React from 'react'
import { connect } from 'react-redux'
// connect is higher order componenet to access things related to REdux.


import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selectors'


import './header.styles.scss'
import {ReactComponent as Logo}  from '../../assets/crown.svg'

import { auth } from '../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink  } from './header.styles'
// css in js


const Header = ({currentUser, hidden}) => (

    <HeaderContainer>
    <LogoContainer to='/' >
        <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink to='/shop'>
            CONTACT
        </OptionLink>
        {
            currentUser ? 
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }

        <CartIcon />
        
    </OptionsContainer>
    {
        hidden ? null : <CartDropDown />
    }
     
    </HeaderContainer>
)


// state is root-reducer
// createStrucredSelector fetch all the top level state as we get mapStatestoProps
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);