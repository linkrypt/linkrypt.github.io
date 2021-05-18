import Landing from "./pages/landing/Landing"
import Pay from "./pages/pay/Pay"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Page404 from "./pages/general/Page404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
