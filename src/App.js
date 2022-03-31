import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignINAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;


  // life cycle Method
  // when someone SignIn and someone SignOut we got that with this
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
     createUserProfileDocument(user);
    })

    
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignINAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
