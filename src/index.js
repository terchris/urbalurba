import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";
import MainPage from "views/Feilmeld/MainPage/MainPage.jsx";
import MemberProfilePage from "views/Member/MemberProfilePage/MemberProfilePage.jsx";
import MemberEntryPage from "views/Member/MemberEntryPage/MemberEntryPage.jsx";
import MemberLandingPage from "views/Member/MemberLandingPage/MemberLandingPage.jsx";
import { Provider } from 'react-redux'
import { createStore, } from 'redux'
import rootReducer from "./redux/reducers/rootReducer"
import MemberHomePage from "./views/Member/MemberHomePage/MemberHomePage.jsx";


import MemberHomePage2 from "./views/Member/MemberHomePage/MemberHomePage2";
import MemberLandingPage2 from "./views/Member/MemberLandingPage/MemberLandingPage2.jsx";
import HeaderTest from "./views/Member/testing/HeaderTest.jsx";

var hist = createBrowserHistory();



const store = createStore(rootReducer); 

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog-post" component={BlogPostPage} />
          <Route path="/blog-posts" component={BlogPostsPage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/ecommerce-page" component={EcommercePage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/product-page" component={ProductPage} />
          <Route path="/sections" component={SectionsPage} />
          <Route path="/shopping-cart-page" component={ShoppingCartPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/feilmeld" component={MainPage} />
          <Route path="/org/orgName" component={MemberProfilePage} />
          <Route path="/org/:urlOrg" component={MemberProfilePage} />
          <Route path="/entry/:urlEntry" component={MemberEntryPage} />
          <Route path="/member-landing" component={MemberLandingPage} />
          <Route path="/member-home" component={MemberHomePage} />
          <Route path="/member-home2" component={MemberHomePage2} />
          <Route path= "/member-landing2" component={MemberLandingPage2} /> 
          <Route path= "/headertest" component={HeaderTest} /> 
          <Route path="/" component={MemberHomePage} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
