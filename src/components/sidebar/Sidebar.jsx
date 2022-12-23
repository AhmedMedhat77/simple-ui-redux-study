import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userName } = useSelector((state) => state.user);
  return (
    <aside className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Hello {userName}</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
