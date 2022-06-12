import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddStudent } from "./components/AddStudent";
import { EditStudent } from "./components/EditStudent";
import {Show} from "./components/Show";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home Students={Students} setStudents={setStudents} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddStudent} />
            <Route path="/edit/:id" component={EditStudent} />
            <Route path="/show/:id" component={Show} />
          </Switch>
        </Router>
    </div>
  )
}

export default App
