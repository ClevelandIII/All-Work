import "../styles/globals.css";
import Layout from "./components/layout/Layout";
import "semantic-ui-css/semantic.min.css";
import { parseCookies, destroyCookie } from "nookies";
import { baseURL } from "./util/baseURL";
import axios from "axios";
import { redirectUser } from "./util/authUser";


const App = ({ Component, pageProps }) => {
  // function MyApp(appContext) {
  //   console.log(appContext);
  //   const {Component, pageProps} = appContext
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const protectedRoutes = ["/"];
  const isProtectedRoutes = protectedRoutes.includes(ctx.pathname);

  if (!token) {
    isProtectedRoutes && redirectUser(ctx, "/login");
  } else {
    try {
      const res = await axios.get(`${baseURL}/api/v1/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { user, followData } = res.data;

      if (user) {
        !isProtectedRoutes && redirectUser(ctx, "/");
      }
      pageProps.user = user;
      pageProps.followData = followData;
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }
  return { pageProps };
};

export default App
