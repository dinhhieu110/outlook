import React from "react";
import "./leftBar.scss";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CloudIcon from "@mui/icons-material/Cloud";
import GridViewIcon from "@mui/icons-material/GridView";
export const LeftBar = () => {
  return (
    <div className="leftBarContainer">
      <ul className="leftBarList">
        <li className="leftBarItem active">
          <EmailIcon />
        </li>
        <li className="leftBarItem ">
          <CalendarMonthOutlinedIcon />
        </li>
        <li className="leftBarItem">
          <PeopleAltOutlinedIcon />
        </li>
        <li className="leftBarItem">
          <GroupsOutlinedIcon />
        </li>
        <li>
          <DoneIcon className=" doneIcon" />
        </li>
        <li>
          <CloudIcon className="cloudIcon" />
        </li>
        <li className="leftBarItem">
          <GridViewIcon />
        </li>
      </ul>
    </div>
  );
};
