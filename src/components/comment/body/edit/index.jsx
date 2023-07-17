import React, { useState } from "react";
import Styles from "./styles.module.scss";

import { TextArea } from "../../../textarea";
import { Button } from "../../../button";
import { useComment } from "../../useComment";

function Edit() {
  const {
    comment: { content },
    onUpdate,
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
    setComment("");
  };

  return (
    <div className={Styles.editWrapper}>
      <TextArea 
        value={comment} 
        onChange={handleChangeComment} 
      />
      <Button
        className={Styles.updateButton}
        onClick={handleUpdate}
        variant="primary"
      >
        Update
      </Button>
    </div>
  );
}

export { Edit };