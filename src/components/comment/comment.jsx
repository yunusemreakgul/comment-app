import React from "react";

import { useComment } from "./useComment";
import { Reactions } from "./reactions";
import { Body } from "./body";
import { Header } from "./header";
import { Replies } from "./replies";
import { NewCommentEditor } from "../new-comment-editor";

import Styles from "./styles.module.scss";

function Comment() {
  const { 
    comment, 
    currentUser, 
    isReplying, 
    onSendReply } = useComment();

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className={Styles.commentWrapper}>
        <Reactions />
        <div className={Styles.commentContent}>
          <Header />
          <Body />
        </div>
      </div>
      {comment.replies?.length > 0 && <Replies />}
      {isReplying && (
        <NewCommentEditor {...currentUser} isReply onSend={onSendReply} />
      )}
    </>
  );
}

export { Comment };