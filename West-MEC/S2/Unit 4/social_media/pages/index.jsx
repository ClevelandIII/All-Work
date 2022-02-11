import { Divider } from "semantic-ui-react";
import { checkToken } from "./util/authUser";
import { useEffect } from "react";

const index = ({ user, followData }) => {

  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`
  },[])

  return <div>Home Page</div>;
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
