import "./App.css";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00083f";
      showAlert("success", "Switched to dark mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Switched to light mode");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Salman" mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm
              title="Enter Your Text "
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
