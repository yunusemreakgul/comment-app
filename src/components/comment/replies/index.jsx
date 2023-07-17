import React from "react";

import Styles from "./styles.module.scss";

import { useComment } from "../useComment";
import { Comment } from "../index";

function Replies() {
  const {
    comment: { replies },
    currentUser,
  } = useComment();

  return (
    <div className={Styles.replies}>
      {replies.map((reply) => (
        <Comment 
            data={{ comment: reply, currentUser }} 
            key={reply.id} 
        />
      ))}
    </div>
  );
}

export { Replies };