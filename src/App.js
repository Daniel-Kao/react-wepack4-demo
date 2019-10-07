import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Router>
    </div>
  );
};

export default App;
