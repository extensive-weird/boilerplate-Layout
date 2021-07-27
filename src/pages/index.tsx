import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style.scss";

const Menu = React.lazy(() => import("../components/Menu"));
const TopBar = React.lazy(() => import("../components/TopBar"));
//pages
const DashBoard = React.lazy(() => import("../pages/DashBoard"));
const Recovery = React.lazy(() => import("../pages/Recovery"));
const Investment = React.lazy(() => import("../pages/Investment"));
const Pages: React.FC<{ history: any; match: any }> = ({ match }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="page">
      <div className="desktop-menu">
        <Menu match={match} />
      </div>
      {/* mobile */}
      {/* <div className={`mobile-menu  ${opened && "opened"}`}>
        <Menu />
      </div> */}
      <div className="content">
        <div className="topbar">
          <TopBar />
        </div>
        <div className="main">
          <Switch>
            <Route
              path={`${match.url}/dashboard`}
              exact
              component={DashBoard}
            />
            <Route path={`${match.url}/recovery`} exact component={Recovery} />
            <Route
              path={`${match.url}/investment`}
              exact
              component={Investment}
            />
            <Redirect to="/error" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Pages;
