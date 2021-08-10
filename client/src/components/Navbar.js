import React,{useState} from 'react'
import '../styles/Navbar.scss'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Cart from './Cart';

const Navbar = ({showCart,setShowCart}) => {

    const cart = useSelector(state => state.cartItems.cart)
    let totalQuantity = 0
    cart.forEach(product =>{
        totalQuantity += product.quantity
    })



    return (
        <div className="navbar">
            <div className="navbar__header">
                <div className="navbar__header__logo"><Link to='/'>Dummy Logo</Link></div>
                <div className="navbar__header__search">
                <input type="search" placeholder="Search for dresses or items" name="" id="" className="search"/>
                <a href="#" className="search-button"><p>Go</p></a>
                </div>
                <div className="navbar__header__cart" onClick = {() => setShowCart(!showCart)} >    
                <LocalMallIcon fontSize="large" style={{color:'white'}}></LocalMallIcon>
                {
                    totalQuantity!==0 && <span className="cart-count">{totalQuantity}</span>
                    
                }
                </div>
                <div className="navbar__header__profile">
                <AccountCircleIcon fontSize="large" style={{color:'white'}}></AccountCircleIcon>
                    <p>Hello, Guest</p>
                </div>
            </div>
            <div className="navbar__links">
            <NavLink to="/newarrivals" activeClassName="is-active">New Arrivals</NavLink>
            <NavLink to="/weddingdresses" activeClassName="is-active">Wedding dresses</NavLink>
            <NavLink to="/customattires" activeClassName="is-active">Custom Attires</NavLink>
            <NavLink to="/accessories" activeClassName="is-active">Accessories</NavLink>
            <NavLink to="/sale" activeClassName="is-active">Sale</NavLink>
            <NavLink to="/categories" activeClassName="is-active">Categories</NavLink>
            <NavLink to="/contactus" activeClassName="is-active">Contact Us</NavLink>
            </div>
        </div>
    )
}

export default Navbar
