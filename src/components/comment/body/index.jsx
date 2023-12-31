import React from "react";

import { useComment } from "../useComment";
import { Edit } from "./edit";
import { Preview } from "./preview";

import Styles from "./styles.module.scss";

import { EDIT_MODE, PREVIEW_MODE } from "./constants";


const Modes = {
  [EDIT_MODE]: Edit,
  [PREVIEW_MODE]: Preview,
};


function Body() {
  const { mode } = useComment();
  const CurrentMode = Modes[mode];

  return (
    <div className={Styles.content}>
      <CurrentMode />
    </div>
  );
}


export {Body};