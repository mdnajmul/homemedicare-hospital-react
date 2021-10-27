import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Slider></Slider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
