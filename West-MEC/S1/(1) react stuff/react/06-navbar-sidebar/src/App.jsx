import { Route, Switch } from "react-router-dom";
import { links } from "./utils/consts";
import { Home } from "./Pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return <Route path={url}>{page}</Route>;
          })}
      </Switch>
    </>
  );
}

export default App;

{
  /* <Route exact path = '/about'>
        <About />
      </Route>
      <Route exact path = '/products'>
        <Products />
      </Route>
      <Route exact path = '/cart'>
        <Cart />
      </Route> */
}
{
  /* <Route exact path = '*'>
        <Error />
      </Route> */
}
