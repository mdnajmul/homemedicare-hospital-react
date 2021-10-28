import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import TopService from "./components/TopService/TopService";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <BottomNav></BottomNav>
          <Slider></Slider>
          <TopService></TopService>
        </Route>
        <Route exact path="/home">
          <Header></Header>
          <BottomNav></BottomNav>
          <Slider></Slider>
          <TopService></TopService>
        </Route>
        <Route path="/login">
          <Header></Header>
          <Login></Login>
        </Route>
        <Route path="/register">
          <Header></Header>
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
