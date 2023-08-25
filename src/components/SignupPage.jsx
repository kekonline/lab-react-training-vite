import React from "react";

function SignupPage() {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [nationalityInput, setationalityInput] = React.useState("Hello");
  const [passValidation, setPassValidation] = React.useState(false);

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordInput = (event) => {
    // event.target.length < 8
    let numCount = 0;
    let charCount = 0;

    setPasswordInput(event.target.value);
    for (let i = 0; i < event.target.value.length; i++) {
      if (
        event.target.value[i] === "0" ||
        event.target.value[i] === "1" ||
        event.target.value[i] === "2" ||
        event.target.value[i] === "3" ||
        event.target.value[i] === "4" ||
        event.target.value[i] === "5" ||
        event.target.value[i] === "6" ||
        event.target.value[i] === "7" ||
        event.target.value[i] === "8" ||
        event.target.value[i] === "9"
      ) {
        numCount++;

        //its no use to use typeof event.target.value[i] === "string" but i have to many labs to finish to take care of this
      } else if (typeof event.target.value[i] === "string") {
        charCount++;
      }
    }
    // console.log(numCount, charCount);
    if (numCount >= 3 && charCount >= 3 && event.target.value.length >= 8) {
      setPassValidation(true);
    } else {
      setPassValidation(false);
    }
  };

  const handleNationalityInput = (event) => {
    if (event.target.value === "en") {
      setationalityInput("Hello");
    } else if (event.target.value === "de") {
      setationalityInput("Hallo");
    } else if (event.target.value === "fr") {
      setationalityInput("Bonjour");
    }
  };
  return (
    <div>
      <h2>SignupPage</h2>

      <label htmlFor="email">Email: </label>

      {emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.indexOf("@") < emailInput.indexOf(".") ? (
        <div>
          <input
            style={{ borderColor: "lightgreen" }}
            type="text"
            name="email"
            onChange={handleEmailInput}
            value={emailInput}
          />
          <p>Nice email</p>
        </div>
      ) : (
        <div>
          <input
            style={{ borderColor: "red" }}
            type="text"
            name="email"
            onChange={handleEmailInput}
            value={emailInput}
          />
          <p>Bad email</p>
        </div>
      )}
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        onChange={handlePasswordInput}
        value={passwordInput}
      />

      {passValidation ? (
        <p>your password is correct</p>
      ) : (
        <p>
          your password is not stronf minimum the length of 8 and must contain 3
          numbers
        </p>
      )}
      <br />
      <label htmlFor="nationality">Nationality: </label>
      <select
        onChange={handleNationalityInput}
        name="nationality"
        defaultValue="en"
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
      <br />

      <h3>{nationalityInput}</h3>

      {emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.indexOf("@") < emailInput.indexOf(".") ? (
        <div>
          <p>you email is: {emailInput}</p> <br /> <p>your email is correct</p>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default SignupPage;
