import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/HiCoder/About/About";
import Contact from "./Components/HiCoder/Contact/Contact";
import WYLearn from "./Components/Course/WYLearn/WYLearn";
import HTApply from "./Components/Course/HTApply/HTApply";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/wylearn">
            <WYLearn></WYLearn>
          </Route>
          <Route path="/htapply">
            <HTApply></HTApply>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
