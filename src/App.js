import "./App.css";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
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
      <Navbar title="Salman" mode={mode} toggleMode={changeMode} />
      <Alert alert={alert} />
      <TextForm title="Enter Your Text " mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
