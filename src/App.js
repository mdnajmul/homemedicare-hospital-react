import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import TopService from "./components/TopService/TopService";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Slider></Slider>
          <TopService></TopService>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
