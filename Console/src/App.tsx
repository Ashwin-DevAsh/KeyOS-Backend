import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Images from "./assets/Images";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    for (var i in Images) {
      const img = new Image();
      img.src = i;
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </Router>
      ) : (
        <div className="loader">
          <img style={{ height: 80, width: 80 }} src={Images.logo} />
        </div>
      )}
    </div>
  );
}

export default App;
