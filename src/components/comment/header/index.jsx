import React from "react";

import {Button} from "../../button"

import { useComment } from "../useComment";
import Styles from "./styles.module.scss"

function Header() {
  const{
    currentUser,
    comment:{
      createdAt,
      user:{
        image,username
      }
    }
  } =useComment();

  const ownedByCurrnetUser = currentUser.username ===username;
  return ( 
    <div className={Styles.headerWrapper}>    
      <div className={Styles.imageWrapper}> 
        <img src={image.png} alt="username"/>
      </div>
      <h3 className={Styles.username}>{username}</h3>
      { ownedByCurrnetUser && <span className={Styles.youIndicator}>you</span>}
      <div className={Styles.createdAt}>{createdAt}</div>
      <div className={Styles.actionButton}>
        { ownedByCurrnetUser ?
          (
            <>
              <Button variant="warning">
                <img src="./images/icon-delete.svg"/>
                Delete
              </Button>
              <Button>
                <img src="./images/icon-edit.svg"/>
                Edit
              </Button>          
            </>

          ):(
              <Button>
                <img src="./images/icon-reply.svg"/>
                Reply
              </Button>
            )
        }


      </div>
    </div>
  )
}

export {Header};