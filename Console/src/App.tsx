import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Images from "./assets/Images";

function App() {
  const [loaderClass, setLoaderClass] = React.useState("loader");

  React.useEffect(() => {
    setTimeout(() => {
      setLoaderClass(loaderClass + " makeinvisible");
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
      <div className={loaderClass}>
        <img style={{ height: 80, width: 80 }} src={Images.logo} />
      </div>
    </div>
  );
}

export default App;
