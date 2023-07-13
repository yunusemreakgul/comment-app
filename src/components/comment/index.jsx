import React from "react";

import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";

import Styles from "./styles.module.scss"


function Comment () {
  return (
    <div className= {Styles.commentWrapper}> 
      <Reactions />
      <div className={Styles.commentContentArea}>
        <Header />
        <Body />
      </div> 
    </div>
  );
}
  
export {Comment};