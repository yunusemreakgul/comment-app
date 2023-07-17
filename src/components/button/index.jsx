import React from "react";
import {clsx} from "clsx"


import Styles from "./styles.module.scss";

function Button({ children, variant="ghost", className, ...props}) {

  return (
    <button 
      {...props}
      className= {clsx(Styles.button, className, Styles[variant])} {...props}>
      {children}
    </button>
  )
}

export {Button};