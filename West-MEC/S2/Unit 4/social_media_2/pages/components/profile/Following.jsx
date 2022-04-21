import React, { useState, useEffect } from "react";
import { Button, Image, List, ListItem } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { NoFollowData } from "../layout/NoData";
import { followUser, unfollowUser } from "../../util/profileActions";
import axios from "axios";
import { baseURL } from "../../util/baseURL";
import Cookies from "js-cookie";

const Following = ({
  user,
  loggedUserFollowStats,
  setLoggedUserFollowStats,
  profileUserId,
}) => {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [followingLoading, setFollowingLoading] = useState(false);

  useEffect(() => {
    const getfollowing= async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${baseURL}/api/v1/profile/following/${profileUserId}`,
          { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
        );

        setFollowing(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getfollowing();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : following ? (
        following.map((following) => {
          const isFollowing = loggedUserFollowStats.following.some(
            (each) => each.user === following.user.id
          );

          return (
            <List key={following.user._id} divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  {following.user._id !== user._id && (
                    <Button
                      color={isFollowing ? "instagram" : "twitter"}
                      icon={isFollowing ? "check" : "add user"}
                      content={isFollowing ? "Following" : "Follow"}
                      disabled={followingLoading}
                      onClick={async () => {
                        setFollowingLoading(true);
                        isFollowing
                          ? await unfollowUser(
                              following.user._id,
                              setLoggedUserFollowStats
                            )
                          : await followUser(
                              following.user._id,
                              setLoggedUserFollowStats
                            );
                        setFollowingLoading(false);
                      }}
                    />
                  )}
                </List.Content>
                <Image avatar src={following.user.profilePicURL} />
                <List.Content as="a" href={`/${following.user.username}`}>
                  {following.user.name}
                </List.Content>
              </List.Item>
            </List>
          );
        })
      ) : (
        <NoFollowData followingComponent={true} />
      )}
    </>
  );
};

export default Following;
