import React from "react";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Klient from "./pages/klient/Klient";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/klient' component={Klient} />
      </Switch>
    </>
  );
}

export default App;
