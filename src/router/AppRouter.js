import { Switch, Route } from "react-router-dom";
import { LoginForm } from "../pages/login/LoginForm";
import { Client } from '../pages/client/Client';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Client} />
    </Switch>
  );
};
