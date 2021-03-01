import React, { Component } from "react";
import "./App.css";
import Home from "./views/home";
import About from "./views/about";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/footer";
import Services from "./views/services";
import Projects from "./views/projects";
import Team from "./views/team";
import Careers from "./views/Careers";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/ourteam" component={Team} />
            <Route exact path="/careers" component={Careers} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
