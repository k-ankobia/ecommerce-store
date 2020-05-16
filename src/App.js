import React from "react";

import "./App.css";
import { HomePage } from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import { Route, Switch } from "react-router-dom";
import { HeaderComponent } from "./components/Header/headerComponent.js";
import { SignInSignOutPage } from "./pages/sign-in-and-sign-up/Sign-in-Sign-outComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
