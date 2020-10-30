import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from "./Components/Home";
// import HomeV2 from "./Components/HomeV2/Home_v2";
import HomeV3 from "./Components/HomeV3/Home_v3";
import Profile from "./Components/Profile-page";
import Dashboard from "./Components/Dashboard-page";
import Search from "./Components/Search-page";
import Register from "./Components/Register/Register";
import Slide from "./Components/Sliderpage";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeV3} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/dashboard/:id" component={Dashboard} />
          <Route path="/search" component={Search} />
          <Route path="/register" component={Register} />
          <Route path="/slideshow" component={Slide} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
