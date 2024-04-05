import "./navBar.scss";
import React from "react";
import Logo from "../../img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import Avatar from "../../img/avatar.jpg";
export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="left">
        <div className="btn">
          <AppsIcon className="appIcon" />
        </div>
        <div className="logo">
          <a href="https://avepointcrm.sharepoint.com/">
            <img src={Logo} alt="a logo"></img>
          </a>
        </div>
        <div className="search">
          <span>Outlook</span>
          <div className="searchBox">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="right">
        <ul className="listItems">
          <li className="item">
            <ForumOutlinedIcon className="iconItem" />
          </li>
          <li className="item">
            <EditNoteIcon className="iconItem" />
          </li>
          <li className="item">
            <EventAvailableOutlinedIcon className="iconItem" />
          </li>
          <li className="item">
            <NotificationsNoneOutlinedIcon className="iconItem" />
          </li>
          <li className="item">
            <SettingsOutlinedIcon className="iconItem" />
          </li>
          <li className="item">
            <TipsAndUpdatesOutlinedIcon className="iconItem" />
          </li>
          <li className="item">
            <img src={Avatar} alt="avatar" width={32} height={32} />
          </li>
        </ul>
      </div>
    </div>
  );
};
