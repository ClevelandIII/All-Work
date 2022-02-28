import { Divider, Segment } from "semantic-ui-react";
import { checkToken } from "./util/authUser";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { baseURL } from "./util/baseURL";
import { NoPosts } from "./components/layout/NoData";
import CreatePost from "./components/post/CreatePost";
import CardPost from "./components/post/CardPost";
// import { PostDeleteToastr } from "./components/layout/Toastr";

const index = ({ user, followData, errorLoading, postData }) => {
  const [posts, setPosts] = useState(postData);
  const [showToastr, setShowToastr] = useState(false);

  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);

  if (posts.length === 0 || errorLoading) return <NoPosts />;

  return (
    <>
      {/* {showToastr && <PostDeleteToastr />} */}
      <Segment>
        <CreatePost user={user} setPosts={setPosts} />
        {posts.length === 0 || errorLoading ? (
          <NoPosts />
        ) : (
          posts.map((post) => {
            return (
              <CardPost
                key={post._id}
                post={post}
                user={user}
                setPosts={setPosts}
                setShowToastr={setShowToastr}
              />
            );
          })
        )}
      </Segment>
    </>
  );
};

index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseURL}/api/v1/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { postData: res.data };
  } catch (error) {
    console.log(error);
    return { errorLoading: true };
  }
};

export default index;

//posts are pageProps
// const index = ({ posts }) => {
// console.log(pageProps);
//   return (
//     <div>
//       {/* {posts &&
//         posts.map((post) => {
//           return (
//             <div key={post.id}>
//               <h1>{post.title}</h1>
//               <p>{post.body}</p>
//               <Divider />
//             </div>
//           );
//         })} */}
//     </div>
//   );
// };

// index.getInitialProps = async (ctx) => {
// const pageProps = await checkToken(ctx)
// console.log(ctx);
// try {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return { posts: res.data };
// } catch (error) {
//   return { errorProp: true };
// }
// };
