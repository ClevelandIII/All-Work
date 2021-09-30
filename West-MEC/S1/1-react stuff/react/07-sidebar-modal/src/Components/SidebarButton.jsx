import React from "react";
import { useAppContext } from "../util/context";
import { FaBars } from "react-icons/fa";

const SidebarButton = () => {
  const { openSidebar } = useAppContext();
  return (
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars />
    </button>
  );
};

export default SidebarButton;
