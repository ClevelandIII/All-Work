import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, socials } from "../util/consts";
import { useAppContext } from "../util/context";
import logo from "../util/logo.svg";

const filterList = ["error"];

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={`sidebar ${sidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding Addict" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links
          .filter((link) => !filterList.includes(link.text))
          .map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  {icon} {text}
                </Link>
              </li>
            );
          })}
      </ul>
      <ul className="socials">
        {socials.map((each) => {
          const { id, url, icon } = each;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
