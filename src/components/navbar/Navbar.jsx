import React from "react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { userName } = useSelector((state) => state.user);
  console.log(userName);
  return (
    <nav className="navbar">
      <h1>Test Code </h1>
      <p>Hello {userName}</p>
    </nav>
  );
};

export default Navbar;
