import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// connect is higher order componenet to access things related to REdux.

import './header.styles.scss'
import {ReactComponent as Logo}  from '../../assets/crown.svg'

import { auth } from '../firebase/firebase.utils'

const Header = ({currentUser}) => (

    <div className='header'>
    <Link to='/' className='logo-container'>
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        
    </div>
    </div>
)


// state is root-reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);