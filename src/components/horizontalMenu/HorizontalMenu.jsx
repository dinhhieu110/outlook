import React from "react";
import "./horizontalMenu.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
export const HorizontalMenu = () => {
  return (
    <div className="horizontalMenuContainer">
      <ul className="hrMenuList">
        <li className="hrMenuItem">
          <div className="newEmail">
            <EmailOutlinedIcon />
            <span>New mail</span>
          </div>
          <button className="arrowEmail">
            <KeyboardArrowDownIcon
              className="arrowSign"
              style={{ marginTop: "4px" }}
            />
          </button>
        </li>
        <li className="hrMenuItem">
          <DeleteOutlinedIcon className="icon redColor" />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <Inventory2OutlinedIcon
            className="icon redColor"
            style={{ marginBottom: "4px" }}
          />
        </li>
        <li className="hrMenuItem">
          <ReportGmailerrorredOutlinedIcon
            className="icon redColor"
            style={{ marginTop: "5px" }}
          />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <CleaningServicesOutlinedIcon
            className="icon"
            style={{ marginBottom: "4px" }}
          />
        </li>
        <li className="hrMenuItem wall">
          <DriveFileMoveOutlinedIcon className="icon blueColor" />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <ReplyOutlinedIcon className="icon blueColor" />
        </li>
        <li className="hrMenuItem">
          <ReplyAllOutlinedIcon className="icon blueColor" />
        </li>
        <li className="hrMenuItem wall">
          <ShortcutOutlinedIcon
            className="icon blueColor"
            style={{ marginTop: "6px" }}
          />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <div className="newStep">
            <FlashOnRoundedIcon style={{ color: "#AA8413" }} />
            <span class="mgr-6">Quick steps</span>
          </div>
          <button className="arrowStep">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <DraftsOutlinedIcon className="icon" />
          <span style={{ marginTop: "2px", fontWeight: "400" }}>
            Read / Unread
          </span>
        </li>
        <li className="hrMenuItem">
          <SellOutlinedIcon className="icon redColor" />{" "}
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <OutlinedFlagIcon className="icon redColor" />{" "}
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem">
          <PushPinOutlinedIcon className="icon blueColor" />
        </li>
        <li className="hrMenuItem">
          <AccessTimeOutlinedIcon className="icon redColor" />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem wall">
          <Inventory2OutlinedIcon className="icon blueColor" />
          <button className="arrowBtn">
            <KeyboardArrowDownIcon className="arrowSign" />
          </button>
        </li>
        <li className="hrMenuItem wall">
          <PrintOutlinedIcon className="icon mgr-6 " />
        </li>
        <li className="hrMenuItem wall">
          <UndoOutlinedIcon className="icon mgr-6 " />
        </li>
        <li className="hrMenuItem">...</li>
      </ul>
    </div>
  );
};
