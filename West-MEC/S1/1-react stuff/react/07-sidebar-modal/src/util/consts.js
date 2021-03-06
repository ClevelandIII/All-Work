import React from "react";
import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaSketch,
} from "react-icons/fa";
import Calender from "../Pages/Calender";
import Documents from "../Pages/Documents";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Team from "../Pages/Team";
import Error from "../Pages/Error";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
    page: <Home />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
    page: <Team />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
    page: <Projects />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
    page: <Calender />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
    page: <Documents />,
  },
  {
    id: 6,
    url: "*",
    text: "error",
    icon: null,
    page: <Error />,
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.sketch.com",
    icon: <FaSketch />,
  },
];
