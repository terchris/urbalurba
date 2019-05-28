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
import MainPage from "views/Feilmeld/MainPage/MainPage.jsx";
import MemberProfilePage from "views/Member/MemberProfilePage/MemberProfilePage.jsx";
import MemberLandingPage from "views/Member/MemberLandingPage/MemberLandingPage.jsx";
import MemberLandingPage2 from "views/Member/MemberLandingPage/MemberLandingPage2.jsx";
import MemberHomePage from "/views/Member/SharedSection/MemberHomePage";
import MemberHomePage2 from "/views/Member/MemberHomePage/MemberHomePage2";

var indexRoutes = [
  { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  { path: "/blog-post", name: "BlogPostPage", component: BlogPostPage },
  { path: "/blog-posts", name: "BlogPostsPage", component: BlogPostsPage },
  { path: "/components", name: "Components", component: ComponentsPage },
  { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  { path: "/ecommerce-page", name: "EcommercePage", component: EcommercePage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/product-page", name: "ProductPage", component: ProductPage },
  { path: "/sections", name: "SectionsPage", component: SectionsPage },
  {
    path: "/shopping-cart-page",
    name: "ShoppingCartPage",
    component: ShoppingCartPage
  },
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/feilmeld", name: "FeilmeldPage", component: MainPage },
  { path: "/member-profile", name: "MemberProfilePage", component: MemberProfilePage },
  { path: "/member-landing", name: "MemberLandingPage", component: MemberLandingPage }, 
  { path: "/member-landing2", name: "MemberLandingPage2", component: MemberLandingPage2 },  
  { path: "/member-home", name: "MemberHomePage", component: MemberHomePage }, 
  { path: "/member-home2", name: "MemberHomePage2", component: MemberHomePage2 }, 
  { path: "/", name: "PresentationPage", component: PresentationPage }
];

export default indexRoutes;
