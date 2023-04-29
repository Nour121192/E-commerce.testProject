import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";

import { userContextStorage } from "../../contexts/user.context";
import { CartStorage } from "../../contexts/cart.context";

import { SignOut } from "../../utiles/firebase/firebase.utiles";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdowen from "../../components/cart-dropdowen/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(userContextStorage);
const {isDropped} = useContext(CartStorage)

  const sign_out_handler = async (event) => {
    await SignOut();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {!currentUser && (
            <Link to="/Auth" className="Auth">
              SIGN IN
            </Link>
          )}
          {currentUser && (
            <Link to="/" className="Auth" onClick={sign_out_handler}>
              SIGN OUT
            </Link>
          )}
          {currentUser && (<CartIcon/>)}
        
        </div>
       { isDropped && (<CartDropdowen/>)}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
