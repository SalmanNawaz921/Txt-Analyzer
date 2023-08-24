import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Salman");
  //   text = "Salman"; //Wrong way to update the text "State" variable
  //   setText("Salman"); //Correct way to update the text "State" variable
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Converted To Upper Case");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Converted To Lower Case");
  };
  const handleLines = () => {
    const newText = text.split(/[\n]+/);
    setText(newText.join("\n"));
    props.showAlert("success", "Removed Extra Lines");
  };
  const handleSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Removed Extra Spaces");
  };

  const emailExtracter = () => {
    let words = text.split(" ");
    for (let word of words) {
      if (word.includes(".") && word.includes("@")) {
        return word;
      }
    }
    return null;
  };

  const handleEmail = () => {
    let email = emailExtracter();
    if (email !== null) {
      setText(email);
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  let wordCount = text.split(" ").filter((word) => word !== "").length;
  let countWordMin = wordCount * 0.008;
  let minutesCount = Math.floor(countWordMin);
  let secondsCount = Math.floor((countWordMin - minutesCount) * 60);
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-secondary" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLines}>
          Remove Lines
        </button>
        <button className="btn btn-danger mx-2" onClick={handleSpaces}>
          Remove Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleEmail}>
          Extract Email
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>
          {text.length} Characters & {wordCount} Words
        </h3>
        <p>
          You can read the given content in {minutesCount} minutes &
          {" " + secondsCount} seconds
        </p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
