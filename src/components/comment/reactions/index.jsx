import React from "react";

import {Button} from "../../button"
import styles from  "./styles.modules.scss?inline"

function Reactions() {

  return (
    <div className={ styles.reactionsWrapper }> 
        <Button aria-labelledby="Positive reaction button">
          <img src="./images/icon-plus.svg" aria-hidden="true"></img>
        </Button>
        <p>
          12
        </p>
        <Button aria-labelledby="Negative reaction button">
          <img src="./images/icon-minus.svg" aria-hidden="true"></img>
        </Button>
    </div>
  )
}

export {Reactions};