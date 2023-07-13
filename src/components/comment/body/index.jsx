import React from "react";

import { useComment } from "../useComment";

import Styles from "./styles.module.scss"

function Body() {
  const {
    comment: {content},
  } = useComment();

  return (
    <div> 
      <p className={Styles.content}>{content}</p>  
    </div> 
  )
}

export {Body};