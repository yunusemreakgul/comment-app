import React from "react";

import styles from "./styles.modules.scss?inline";

function Button({ children, variant="ghost", className, ...props}) {

  return (
    <button
      {...props}
      className= {styles.button}
    > 
        {children}
    </button>
  )
}

export {Button};