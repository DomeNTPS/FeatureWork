import React from "react";
import './App.css';
import Homepage from "./pages/homepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
