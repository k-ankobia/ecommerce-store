import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import { HomePage } from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import HeaderComponent from "./components/Header/headerComponent.js";
import { SignInSignOutPage } from "./pages/sign-in-and-sign-up/Sign-in-Sign-outComponent";

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignOutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
