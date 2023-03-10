import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Button } from "@mui/material";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const myId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <>
            <div className="header">
              <h1 className="title">GraceShopper</h1>
              <h3 className="user">Welcome, {username}</h3>
            </div>
            <div className="nav-bar">
              <div className="nav-bar-left">
                {/* The navbar will show these links after you log in */}
                <Link to="/home">Home</Link>
                <Link to={`/users/${myId}`}>Account</Link>
                <Link to={`/users/${myId}/cartitems`}>Cart</Link>
              </div>
              <div className="nav-bar-right">
                <Link to={`/users/`}>All Users</Link>
                <button
                  className="logout"
                  type="button"
                  onClick={logoutAndRedirectHome}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header">
              <h1 className="title">GraceShopper</h1>
            </div>

            <div className="nav-bar">
              <div className="nav-bar-left">
                {/* The navbar will show these links after you log in */}
                <Link to="/home">Home</Link>
                {/* <Link to={`/users/${myId}`}>Account</Link> */}
                <Link to={`/users/cartitems`}>Cart</Link>
              </div>
              <div className="nav-bar-right">
                {/* <Link to={`/users/`}>All Users</Link> */}

                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
