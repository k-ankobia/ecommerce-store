import React from "react";

import "./App.css";
import { HomePage } from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import { Route, Switch } from "react-router-dom";
import { HeaderComponent } from "./components/Header/headerComponent.js";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
