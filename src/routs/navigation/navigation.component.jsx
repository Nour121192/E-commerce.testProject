import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";
import { userContextStorage } from "../../contexts/user.context";
import { SignOut } from "../../utiles/firebase/firebase.utiles";

const Navigation = () => {
  const { currentUser } = useContext(userContextStorage);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
