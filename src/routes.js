import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/index";
import Results from "./pages/Results";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/pesquisa/:palavra">
            <Results />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
