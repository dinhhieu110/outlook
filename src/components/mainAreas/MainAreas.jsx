import React from "react";
import "./mainAreas.scss";
import { Mails } from "../mails/Mails";
import { Content } from "../content/Content";
import { VerticalMenu } from "../verticalMenu/VerticalMenu";
export const MainAreas = () => {
  return (
    <div className="mainAreasContainer">
      <VerticalMenu />
      <Mails />
      <Content />
    </div>
  );
};
