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
            </Route>
            <Route exact path="/home">
              <Header></Header>
              <BottomNav></BottomNav>
              <Slider></Slider>
              <TopService></TopService>
              <HomeServices></HomeServices>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
            </Route>
            <PrivateRoute path="/aboutus">
              <Header></Header>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Header></Header>
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Header></Header>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Header></Header>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:serviceId">
              <Header></Header>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
