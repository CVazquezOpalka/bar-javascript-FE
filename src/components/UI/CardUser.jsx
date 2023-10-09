import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CardUser = () => {
  const navigate = useNavigate();
  const divRef = useRef();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const [menuActive, setMenuActive] = useState(false);
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  const toggle = () => {
    setMenuActive(!menuActive);
  };

  const activeClass = menuActive ? "absolute" : "hidden";
  const activeBtn = menuActive
    ? "border-transparent text-white bg-primary"
    : "text-black border-black";

  useEffect(() => {
    const outsiderClick = (event) => {
      if (
        menuActive &&
        divRef.current &&
        !divRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };
    if (menuActive) {
      document.addEventListener("mousedown", outsiderClick);
    }
    return () => {
      document.removeEventListener("mousedown", outsiderClick);
    };
  }, [menuActive]);

  return (
    <div>
      <button
        ref={btnRef}
        className={`border px-4 py-1 ${activeBtn}`}
        onClick={toggle}
      >
        {userInfo && userInfo.username}
      </button>
      <div
        ref={divRef}
        className={`${activeClass} absolute bg-white mt-2 px-7 py-2 shadow-lg  `}
      >
        <h3>{userInfo && userInfo.username}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {userInfo && userInfo.email}
        </p>
        <Link to={"/orders"} onClick={toggle}>
          Order Hstory
        </Link>
        <hr className="my-2" />
        <button
          onClick={handleLogOut}
          className="flex justify-center align-center border px-4 py-2 hover:bg-secondary hover:text-white"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default CardUser;
