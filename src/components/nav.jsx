import React from "react";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to={"/contact"}>contact</NavLink> <br />
        <NavLink to={"/about"}>about</NavLink>
        <br />
        <NavLink to={"/images"}>images</NavLink>
        <>
          <Outlet />
        </>
      </nav>
    </>
  );
};

export default Nav;
