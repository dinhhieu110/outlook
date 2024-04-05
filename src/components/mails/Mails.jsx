import React from "react";
import "./mails.scss";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { users } from "../../fake-data/user.js";
import { Mail } from "../mail/Mail";
export const Mails = () => {
  return (
    <div className="mailsContainer">
      <div className="headers">
        <ul className="filter1">
          <li className="active">
            <a href="##">
              <p className="text">Focused</p>
            </a>
          </li>
          <li>
            <a href="##">
              <p className="text">Others</p>
            </a>
          </li>
        </ul>
        <ul className="filter2">
          <li>
            <a href="##">
              <ContentCopyOutlinedIcon
                style={{ width: "18px", color: "black" }}
              />
            </a>
          </li>
          <li>
            <a href="##">
              <FilterListOutlinedIcon
                style={{ width: "18px", color: "black" }}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mailsDisplay">
        <hr />
        {users.map((user) => (
          <Mail key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
