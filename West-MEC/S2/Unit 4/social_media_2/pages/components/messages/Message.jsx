import React, { useState } from "react";
import { Icon, Popup } from "semantic-ui-react";
import calculateTime from "../../util/calculateTime";

const Message = ({ message, user, deleteMsg, bannerProfilePic, divRef }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const ifSender = message.sender === user._id;
  return (
    <div className="bubbleWrapper" ref={divRef}>
      <div
        className={ifSender ? "inclineContainer own" : "inlineContainer"}
        onClick={() => ifSender && setShowDeleteIcon(!showDeleteIcon)}
      >
        <img
          style={{ objectFit: "contain", height: "30px", width: "30px" }}
          className="inlineIcon"
          src={ifSender ? user.profilePicURL : bannerProfilePic}
        />
      </div>
      <div className={ifSender ? "ownBubble own" : "otherBubble other"}>
        {message.msg}

        {showDeleteIcon && (
          <Popup
            triggerRef={
              <Icon
                name="trash"
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => deleteMsg(message._id)}
              />
            }
            content="This will only delete the comment from your inbox, not theirs..."
            position="top right"
          />
        )}
      </div>
      <span className={ifSender ? "own" : "other"}>
        {calculateTime(message.date)}
      </span>
    </div>
  );
};

export default Message;
