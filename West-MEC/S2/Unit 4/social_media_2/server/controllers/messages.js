const ChatModel = require("../models/ChatModel");
const UserModel = require("../models/UserModel");

const getChats = async (req, res) => {
  try {
    const { userId } = req;
    const user = await ChatModel.findOne({ user: userId }).populate(
      "chats.messagesWith"
    );

    let chatsToBeSent = [];

    if (user.chats.length > 0) {
      chatsToBeSent = await user.chats.map((chat) => ({
        messagesWith: chat.messagesWith._id,
        name: chat.messagesWith.name,
        profilePicURL: chat.messagesWith.profilePicURL,
        lastMessage: chat.messages[chat.messages.length - 1].msg,
        date: chat.messages[chat.messages.length - 1].date,
      }));
    }
    return res.status(200).json(chatsToBeSent);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Yo you got a massive error at get chats");
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userToFindId);
    if (!user) {
      return res
        .status(404)
        .send("Connection Terminated. I'm sorry E... I mean user not found");
    }
    return res
      .status(200)
      .json({ name: user.name, profilePicURL: user.profilePicURL });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Yo you got a massive error at get user info");
  }
};

const deleteChat = async (req, res) => {
  try {
    const { userId } = req;
    const { messagesWith } = req.params;

    const user = await ChatModel.findOne({ user: userId });
    const chatToDeleteIndex = user.chats.findIndex(
      (chat) => chat.messagesWith.toString() === messagesWith
    );

    if (chatToDeleteIndex === -1) return res.status(404).send("Chat not found");

    await user.chats.splice(chatToDeleteIndex, 1);
    await user.save();
    
  } catch (error) {
    console.log(error);
    return res.status(400).send("Yo you got a massive error at delete chat");
  }
};

module.exports = { getChats, getUserInfo, deleteChat };
