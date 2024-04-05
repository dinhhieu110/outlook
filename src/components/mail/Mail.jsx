import React from "react";
import "./mail.scss";
import Avatar from "../../img/avatar.jpg";

export const Mail = ({ user }) => {
  return (
    <div className="box">
      <div className="mailContainer">
        <img src={Avatar} alt="sender.img" width={35} height={35} />
        <div className="info">
          <p className="name">{user.fullName}</p>
          <div className="mailTitle">
            Daily Report Template
            <span className="time"> {user.time}</span>
          </div>
          <p className="content">Hi Lucy, We would like to...</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
