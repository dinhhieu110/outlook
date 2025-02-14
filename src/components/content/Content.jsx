import React from "react";
import "./content.scss";
import Avatar from "../../img/avatar.jpg";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
export const Content = () => {
  return (
    <div className="contentContainer">
      <div className="emailTitle">
        <p className="name">Daily Report Template</p>
      </div>
      <div className="box">
        <div className="avatar">
          <img src={Avatar} alt="image.png" width={32} height={32} />
        </div>
        <div className="smallBox">
          <div className="platformAndFunction">
            <span>GitLab (gitlab@avepoint.com)</span>
            <ul className="iconsList">
              <li>
                <SentimentVerySatisfiedIcon className="redColor" />
              </li>
              <li>
                <ReplyIcon className="blueColor" />
              </li>
              <li>
                <ReplyAllIcon className="blueColor" />
              </li>
              <li>
                <RedoOutlinedIcon className="blueColor" />
              </li>
            </ul>
          </div>
          <div className="receiverAndDate">
            <div className="receiver">To: Willson Tran</div>
            <div className="date">Tue 4/2/2024 1:08 PM</div>
          </div>
          <div className="content">
            <p className="greet">Hi Willson Tran!</p>
            <p className="mainContent">
              A new GPG key was added to your account: Fingerprint:
              113FFCE7066857F95A51984D46FA21CAA4B1E986 If this key was added in
              error, you can remove it under GPG Keys
            </p>
            <p className="gitNote">
              <a href="https://outlook.office.com/mail/safelink.html">
                View it on GitLab
              </a>
              <p>You're receiving this email because of your account on</p>
              <a href="git.avepoint.net">git.avepoint.net</a>.{" "}
              <a href="##">Manage all notifications</a>· <a href="##">Help</a>
            </p>
          </div>
          <div className="btns">
            <div className="btn">
              <ReplyIcon className="icon" />
              Reply
            </div>
            <div className="btn">
              <RedoOutlinedIcon className="icon" />
              Forward
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
