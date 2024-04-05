import React from "react";
import "./verticalMenu.scss";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
export const VerticalMenu = () => {
  return (
    <div className="verticalMenuContainer">
      {/* Favorites */}
      <ul className="verticalMenuList">
        <div className="cateTitle">
          <KeyboardArrowDownIcon className="icon" />
          <span>Favourites</span>
        </div>
        <li className="verticalMenuItem">
          <div className="category">
            <AllInboxOutlinedIcon className="icon" />
            <span>Inbox</span>
          </div>
          <span className="numOfNotification redColor">1</span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <SendOutlinedIcon className="icon" />
            <span>Sent Items</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <EditNoteOutlinedIcon className="icon" />
            <span>Drafts</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <DeleteSweepOutlinedIcon className="icon" />
            <span>Deleted Items</span>
          </div>
          <span className="numOfNotification redColor">1</span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <span class="redColor">Add favorite</span>
          </div>
        </li>
      </ul>

      {/* Folders */}
      <ul className="verticalMenuList">
        <div className="cateTitle">
          <KeyboardArrowDownIcon />
          <span>Folders</span>
        </div>
        <li className="verticalMenuItem">
          <div className="category">
            <AllInboxOutlinedIcon className="icon" />
            <span>Inbox</span>
          </div>
          <span className="numOfNotification redColor">1</span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <EditNoteOutlinedIcon className="icon" />
            <span>Drafts</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <SendOutlinedIcon className="icon" />
            <span>Sent Items</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <DeleteSweepOutlinedIcon className="icon" />
            <span>Deleted Items</span>
          </div>
          <span className="numOfNotification redColor">1</span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <FolderOffOutlinedIcon />
            <span>Junk Emails</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <Inventory2OutlinedIcon />
            <span>Archive</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <TextSnippetOutlinedIcon />
            <span>Archive</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <FolderOpenOutlinedIcon />
            <span>Conversation History</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <FolderOpenOutlinedIcon className="icon" />
            <span>RSS Feeds</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <span class="redColor">Create new folder</span>
          </div>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <FolderOpenOutlinedIcon className="icon" />
            <span>Search Folders</span>
          </div>
          <span className="numOfNotification redColor"></span>
        </li>
      </ul>

      {/* Groups */}
      <ul className="verticalMenuList">
        <div className="cateTitle">
          <KeyboardArrowDownIcon />
          <span>Groups</span>
        </div>
        <li className="verticalMenuItem">
          <div className="category">
            <span class="redColor">Discover groups</span>
          </div>
        </li>
        <li className="verticalMenuItem">
          <div className="category">
            <span class="redColor">Manage groups</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
