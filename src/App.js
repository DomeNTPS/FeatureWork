import React from "react";
import './App.css';
import Task1 from "./components/Task1"
import Task2 from "./components/Task1_2"
import Task4 from "./components/Task1_4"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/Task2">
              <Task2 />
            </Route>
            <Route path="/Task1">
              <Task1 />
            </Route>
            <Route path="/">
              <Task4 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
