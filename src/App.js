import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import TopService from "./components/TopService/TopService";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import BottomNav from "./components/BottomNav/BottomNav";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomeServices from "./components/HomeServices/HomeServices";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import AllServices from "./components/AllServices/AllServices";
import HomePageDoctors from "./components/HomePageDoctors/HomePageDoctors";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <TopService></TopService>
              <HomeServices></HomeServices>
              <HomePageDoctors></HomePageDoctors>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <TopService></TopService>
              <HomeServices></HomeServices>
              <HomePageDoctors></HomePageDoctors>
              <Footer></Footer>
            </Route>
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route exact path="/register">
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path="/aboutus">
              <Header></Header>
              <AboutUs></AboutUs>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Header></Header>
              <AllServices></AllServices>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/doctors">
              <Header></Header>
              <AllDoctors></AllDoctors>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/servicedetails/:serviceId">
              <Header></Header>
              <ServiceDetail></ServiceDetail>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
