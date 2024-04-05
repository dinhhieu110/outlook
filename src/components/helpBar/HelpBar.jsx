import React from "react";
import "./helpBar.scss";
import MenuIcon from "@mui/icons-material/Menu";
export const HelpBar = () => {
  return (
    <div className="helpBarContainer">
      <ul className="helpBarList">
        <li>
          <div className="appBtn">
            <MenuIcon />
          </div>
        </li>
        <li className="active">
          <a href="##">Home</a>
        </li>
        <li>
          <a href="##">View</a>
        </li>
        <li>
          <a href="##">Help</a>
        </li>
      </ul>
    </div>
  );
};
