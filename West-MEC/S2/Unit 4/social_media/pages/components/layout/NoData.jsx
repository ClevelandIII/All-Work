import { Message, Button } from "semantic-ui-react";

export const NoProfilePosts = () => {
  return (
    <>
      <Message
        info
        icon="meh"
        header="Sorry"
        content="NO PERSONAL INFORMATION SHARED"
      />
      <Button
        icon="long arrow alternate left"
        content="Go Back"
        as="a"
        href="/"
      />
    </>
  );
};

export const NoFollowData = ({
  profileName,
  followersComponent = true,
  followingComponent = true,
}) => {
  return (
    <>
      {followersComponent && (
        <Message
          icon="user outline"
          info
          content={`${profileName.split(" ")[0]} NO FRIENDS`}
        />
      )}
      {followingComponent && (
        <Message
          icon="user outline"
          info
          content={`${profileName.split("")[0]} NO FANS`}
        />
      )}
    </>
  );
};

export const NoMessages = () => {
  return (
    <>
      <Message
        info
        icon="telegram plane"
        header="Sorry"
        content="No messages. Need friends? Jk jk, unless?"
      />
    </>
  );
};

export const NoPosts = () => {
  return (
    <>
      <Message
        info
        icon="meh"
        header="Hello"
        content="SHARE YOUR PERSONAL INFORMATION OR GET SOMEONE ELSES"
      />
      ;
    </>
  );
};
