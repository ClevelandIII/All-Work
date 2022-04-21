const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");
const FollowerModel = require("../models/FollowerModel");
const ProfileModel = require("../models/ProfileModel");
const bcrypt = require("bcryptjs");
const { each } = require("lodash");

const getProfile = async (req, res) => {
  try {
    const { username } = req.params;
    console.log(username);
    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res.status(404).send("user not found");
    }
    console.log(user);
    const profile = await ProfileModel.findOne({ user: user._id }).populate(
      "user"
    );
    console.log(profile);
    const profileFollowStats = await FollowerModel.findOne({ user: user._id });

    return res.status(200).json({
      profile,
      followersLength:
        profileFollowStats.followers.length > 0
          ? profileFollowStats.followers.length
          : 0,
      followingLength:
        profileFollowStats.following.length > 0
          ? profileFollowStats.following.length
          : 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("error at getProfile");
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res
        .status(404)
        .send("Yeah this user doesnt exist, or at least we couldnt track 'em");
    }

    const posts = await PostModel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("comments.user");

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error at getUserPosts");
  }
};

const getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await FollowerModel.findOne({ user: userId }).populate(
      "followers.user"
    );
    res.status(200).json(user.followers);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Yeah chief there is an error at getFollowers");
  }
};

const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await FollowerModel.findOne({ user: userId }).populate(
      "following.user"
    );
    res.status(200).json(user.following);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error at getFollowing");
  }
};

const followUser = async (req, res) => {
  try {
    const { userId } = req;
    const { userToFollowId } = req.params;

    const user = await FollowerModel.findOne({ user: userId });
    const userToFollow = await FollowerModel.findOne({ user: userToFollowId });

    if (userToFollowId === userId)
      return res.status(404).send("Yeah you cant do that.");

    if (!user || !userToFollow) return res.status(404).send("User Not Found");

    const isFollowing = user.following.find(
      (eachUser) => eachUser.user.toString() === userToFollowId
    );

    if (isFollowing) return res.status(401).send("User is already followed");

    await user.following.unshift({ user: userToFollowId });
    await userToFollow.followers.unshift({ user: userId });

    await user.save();
    await userToFollow.save();

    return res.status(200).send("You will now track this user");
  } catch (error) {
    console.log(error);
    return res.status(500).send("error at followUser");
  }
};

const unfollowUser = async (req, res) => {
  try {
    const { userId } = req;
    const { userToUnfollowId } = req.params;

    const user = await FollowerModel.findOne({
      user: userId,
    });
    const userToUnfollow = await FollowerModel.findOne({
      user: userToUnfollowId,
    });

    if (userToUnfollowId === userId)
      return res.status(404).send("What are you trying to do?");
    if (!user || !userToUnfollow) return res.status(404).send("user not found");

    const isFollowingIndex = user.following.findIndex(
      (eachUser) => eachUser.user.toString() === userToUnfollowId
    );

    if (isFollowingIndex === -1)
      return res
        .status(401)
        .send("You didnt know this person before, why would you know them now");

    await user.following.splice(isFollowingIndex, 1);

    await user.save();

    const removeFollowerIndex = userToUnfollow.followers.findIndex(
      (eachUser) => eachUser.user.toString() === userId
    );

    await userToUnfollow.followers.splice(removeFollowerIndex, 1);
    await userToUnfollow.save();

    return res.status(200).send("Finally, Freedom.");
  } catch (error) {
    console.log(error);
    return res.status(500).send("error at unfollowUser");
  }
};

module.exports = {
  getProfile,
  getUserPosts,
  getFollowers,
  followUser,
  unfollowUser,
  getFollowing,
};
