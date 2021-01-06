import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Old from "../pages/old";
import New from "../pages/new";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/old" component={Old} />
        <Route path="/new" component={New} />
      </Switch>
    </>
  );
};

export default Routes;
