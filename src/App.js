import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "./utils";
import { HomeContainer } from "./components";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Provider>
        <Switch>
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
