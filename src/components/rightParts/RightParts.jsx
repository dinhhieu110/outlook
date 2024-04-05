import { HelpBar } from "../helpBar/HelpBar";
import { HorizontalMenu } from "../horizontalMenu/HorizontalMenu";
import { MainAreas } from "../mainAreas/MainAreas";
import "./rightParts.scss";

import React from "react";

export const RightParts = () => {
  return (
    <div className="rightPartsContainer">
      <HelpBar />
      <HorizontalMenu />
      <MainAreas />
    </div>
  );
};
