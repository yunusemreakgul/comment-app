import React from "react";

import {Button} from "../../button"
import Styles from  "./styles.module.scss"
import { useComment } from "../useComment";


function Reactions() {
  const { 
    comment : {score} 
  } = useComment();
 

  return (
    <div className={ Styles.reactionsWrapper }> 
        <Button aria-labelledby="Positive reaction button">
          <img src="./images/icon-plus.svg" aria-hidden="true"></img>
        </Button>
        <p> {score} </p>
        <Button aria-labelledby="Negative reaction button">
          <img src="./images/icon-minus.svg" aria-hidden="true"></img>
        </Button>
    </div>
  )
}

export {Reactions};