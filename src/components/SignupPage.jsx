import React from "react";

function SignupPage() {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [nationalityInput, setationalityInput] = React.useState("Hello");

  const handleEmailInput = (event) => {};

  const handlePasswordInput = (event) => {};

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
      <input
        type="text"
        name="email"
        onChange={handleEmailInput}
        value={emailInput}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        onChange={handlePasswordInput}
        value={passwordInput}
      />
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
    </div>
  );
}

export default SignupPage;
