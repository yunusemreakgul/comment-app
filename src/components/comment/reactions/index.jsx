import React from "react";

import {Button} from "../../button"
import Styles from  "./styles.module.scss"
import { useComment } from "../useComment";


function Reactions() {
  const { 
    comment : {score},
    onPositiveReaction,
    onNegativeReaction, 
  } = useComment();
 

  return (
    <div className={ Styles.reactionsWrapper }> 
        <Button
          className={Styles.reactionButton} 
          aria-labelledby="Positive reaction button"
          onClick={onPositiveReaction}  
        >
          <img src="./images/icon-plus.svg" aria-hidden="true"/>
        </Button>
        <p className={Styles.score}> 
          {score} 
        </p>
        <Button
          className={Styles.reactionButton} 
          aria-labelledby="Negative reaction button"
          onClick={onNegativeReaction}
        >
          <img src="./images/icon-minus.svg" aria-hidden="true"></img>
        </Button>
    </div>
  );
}

export {Reactions};