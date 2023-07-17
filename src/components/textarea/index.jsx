import React from "react";
import Styles from "./styles.module.scss";

function TextArea({ ...props }) {
  return <textarea className={Styles.textArea} rows={4} {...props} />;
}

export { TextArea };