const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");
const uuid = require("uuid").v4;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Create Post
.post('/')
req.body {text, location, picUrl}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const createPost = async (req, res) => {
  const { text, location, picUrl } = req.body;
  if (!text.length)
    return res.status(401).send("text must be at least one character long");

  try {
    const newPost = {
      user: req.userId,
      text,
    };
    if (location) newPost.location = location;
    if (picUrl) newPost.picUrl = picUrl;

    const post = await new PostModel(newPost).save();
    const postCreated = await PostModel.findById(post._id).populate("user");

    return res.status(200).json(postCreated);
  } catch (error) {
    console.log(error);
    return res.status(500).send("On us guys, post controller not working");
  }
};

/*``````````````````````````````````````````````````````````````````````````````````````````````````````````
Get all Posts
.get('/')
req.query {pageNumber}
`````````````````````````````````````````````````````````````````````````````````````````````````````````````*/

const getAllPosts = async (req, res) => {
  const { page } = req.query;

  const pageNumber = Number(page);
  const size = 8;

  try {
    let posts;
    if (pageNumber === 1) {
      posts = await PostModel.find()
        .limit(size)
        .size({ createdAt: -1 })
        .populate("user")
        .populate("comments.user");
    } else {
      const skips = size * (pageNumber - 1);
      posts = await PostModel.find()
        .skip(skips)
        .limit(size)
        .sort({ createdAt: -1 })
        .populate("user")
        .populate("comments.user");
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send("On us guys, get all posts not working");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
get post by id
.get('/:postId')
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.postId)
      .populate("user")
      .populate("comments.user");

    if (!post) return res.status(404).send("Mayday Mayday! Post not found!");

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).send("On us guys, get post id not working");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
delete post
.delete('/:postId)
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const deletePost = async (req, res) => {
  try {
    const { userId } = req;
    const { postId } = req.params;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).send("Mayday Mayday! Post not found!");

    const user = await UserModel.findById(userId);

    if (post.user.toString() !== userId) {
      if (user.role === "root") {
        await post.remove();
        if (!post) return res.status(200).send("Post ripped");
      } else {
        if (!post) return res.status(401).send("Unauthorized");
      }
    }
    await post.remove();
    return res.status(200).send("Post has been assassinated");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Our fault, delete post isnt working...");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Like a post
.post('/like/:postId')
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("No Post Found");

    const isLiked = Boolean(
      post.likes.find((like) => like.user.toString() === userId)
    );

    if (isLiked) return res.status(401).send("Post alreaty liked");

    await post.likes.unshift({ user: userId });

    await post.save();

    return res.status(200).send("Post liked. Loved even...");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Yeah we got a server issue at like post. Over");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Unlike a post
.put('/like/:post')
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("No Post Found");

    const likedIndex = Boolean(
      post.likes.find((like) => {
        return like.user.toString() === userId;
      })
    );

    if (!likedIndex === -1)
      return res.status(403).send("Post Never Liked Before...");

    await post.likes.splice(likedIndex, 1);
    await post.save();

    return res.status(200).send("Post unliked. Unloved even...");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Yeah we got a server issue at unlike post. Over");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
get all likes on a post
.get('/like/:postId)
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("likes.user");
    if (!post) return res.status(403).send("No Post Found");

    return res.status(200).json(post.likes);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Yeah we got a server issue at get likes. Over");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
create comment
.post('/comment/:postId')
req.params {postId}
req.body {text}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;

    if (!text)
      return res.status(401).send("Text needs more than 0 characters...");

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("No Post Found");

    const newComment = {
      _id: uuid(),
      text,
      user: req.userId,
    };
    await post.comments.unshift(newComment);
    await post.save();

    return res.status(200).json(newComment._id);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Yeah we got a server issue at create comment. Over");
  }
};
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
delete a comment
.delete('/comment/:postId/:commentId')
req.params {postId, commentId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { userId } = req;
    
    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("No Post Found");

    const comment = post.comments.find((comment) => comment._id === commentId);
    if (!comment) return res.status(403).send("No Comment Found");

    const user = await UserModel.findById(userId);

    const deleteComment = async () => {
      const indexOf = post.comments
        .map((comment) => comment._id)
        .indexOf(commentId);

      await post.comments.splice(indexOf, 1);
      await post.save();

      return res.status(200).send("Comment has been taken care of.");
    };

    if (comment.user.toString() !== userId) {
      if (user.role === "root") {
        await deleteComment();
      } else {
        return res.status(401).send("Unauthorized");
      }
    }

    await deleteComment();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Yeah we got a server issue at delete comment. Over");
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  likePost,
  unlikePost,
  getLikes,
  createComment,
  deleteComment,
};
