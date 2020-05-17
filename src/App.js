import React from "react";

import "./App.css";
import { HomePage } from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import { Route, Switch } from "react-router-dom";
import { HeaderComponent } from "./components/Header/headerComponent.js";
import { SignInSignOutPage } from "./pages/sign-in-and-sign-up/Sign-in-Sign-outComponent";

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={SignInSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
