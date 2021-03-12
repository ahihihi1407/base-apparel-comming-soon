/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './App.css';
import Logo from "./images/logo.svg";
import Arrow from './images/icon-arrow.svg';
import Error from './images/icon-error.svg';

function App() {
  const [mail, setMail] = useState("");
  const [valid, setValid] = useState();
  const [showWarning, setShowWarning] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setMail(value);
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    value.match(pattern) ? setValid(true, setShowWarning(false)) : setValid(false);
  }

  function handleSubmission() {
    valid ? alert(
      "Your email, " + mail + " was registered!",
      setMail("")
    ) : setShowWarning(true);
  }

  return (
    <div className="App">
      <img className="logo" src={Logo} aria-labelledby="logo-image" />
      <div className="hero-image" />
      <div className="content">
        <h1>
          <span> We're </span> <br /> coming <br /> soon
        </h1>

        <p>Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our launch deals.
        </p>

        <div className="mail-container">
          <input type="email"
            aria-labelledby="email address"
            placeholder="Email Address"
            value={mail}
            onChange={handleChange}
            onKeyDown={(event) => event.key === "Enter" && handleSubmission()}
            className={showWarning ? "warn-input" : ""}
          />
          {showWarning && <img src={Error} className="error-icon" />}
          <button type="submit"
            aria-labelledby="submit"
            onClick={handleSubmission}>

            <img src={Arrow}
              aria-labelledby="arrow-submit-img"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
