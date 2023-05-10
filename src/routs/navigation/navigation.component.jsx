import { Outlet } from "react-router-dom";
import { Fragment, useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from "./navigation.styles.jsx";

// import { userContextStorage } from "../../contexts/user.context";
import { CartStorage } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selection";
// import { UseCurUser } from "../../store/user/user.actions";

import { SignOut } from "../../utiles/firebase/firebase.utiles";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdowen from "../../components/cart-dropdowen/cart-dropdown.component";

const Navigation = () => {
  // const currentUser = UseCurUser().currentUser
  // const { currentUser } = useContext(userContextStorage);
const currentUser = useSelector(selectUser)

const {isDropped} = useContext(CartStorage)

  const sign_out_handler = async (event) => {
    await SignOut();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="Logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop" >
            SHOP
          </NavLink>
          {!currentUser && (
            <NavLink to="/Auth" >
              SIGN IN
            </NavLink>
          )}
          {currentUser && (
            <NavLink to="/"  onClick={sign_out_handler}>
              <NavLink as="span">
              SIGN OUT
              </NavLink>
            </NavLink>
          )}
          {currentUser && (<CartIcon/>)}
        
        </NavLinksContainer>
       { isDropped && (<CartDropdowen/>)}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
