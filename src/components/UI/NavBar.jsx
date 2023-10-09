import React from "react";
import Logo from "../svg/Logo";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import CardButton from "../cart/CardButton";
import CardUser from "./CardUser";
function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedin);
  const btnNavLink =
    "block inline-block py-1 text-black hover:text-primary cursor-pointer mr-4";
  const activeLink = "block inline-block py-1 text-primary  mr-4";
  return (
    <header className="pt-0">
      <nav className="flex items-center justify-between bg-accent p-6 mb-2">
        <div className="flex items-center mr-6">
          <Logo />
          <span className="font-semibold text-2x1 mx-2">ChatBot Bar</span>
        </div>
        <div className="grow flex item-center">
          <div className="grow">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : btnNavLink)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : btnNavLink)}
            >
              About
            </NavLink>
          </div>
          <div className="flex">
            {!isLoggedIn && (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeLink : btnNavLink
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? activeLink : btnNavLink
                  }
                >
                  Signin
                </NavLink>
              </>
            )}
            {isLoggedIn && (
             <CardUser/>
            )}
            <CardButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
