import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignINAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./components/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
class App extends React.Component {

  unsubscribeFromAuth = null;


  // life cycle Method
  // when someone SignIn and someone SignOut we got that with this
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          // to see the data we use snapShot.data()
          // console.log(snapShot.data());

          setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
        
        setCurrentUser(userAuth)
    });

    
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={this.props.currentUser ? (<Navigate replace to='/' />) : (<SignINAndSignUpPage/>)} />
        </Routes>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

// dispatch whatever u passing me will pass to every reducer
const mapDispatchToProps = dispatch => ({
    	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
