import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import {ReactComponent as Logo}  from "../../assets/crown.svg";
import { signOutUser } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.componet";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { NavContainer, NavLinks, NavLink, LogoContainer } from "./header.styles"; 

const Header = ()=>{
    const { currentUser} = useContext(UserContext);
    const{isCartOpen} = useContext(CartContext);
    return(
        <Fragment>
        <NavContainer>
            <LogoContainer to = '/' >
                <Logo className="logo"/>
                </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>SHOP</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
                {currentUser ?(
                    <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>)
                    :(<NavLink to='/auth'>
                        {''}
                        SIGN IN{''}
                        </NavLink>)
                }
                <CartIcon/>
            </NavLinks>
            {/* evalute the cartdropdown to make the logic operation */}
            {isCartOpen && <CartDropdown/>} 
        </NavContainer>
        <Outlet/>
    </Fragment>
    );
};
export default Header;