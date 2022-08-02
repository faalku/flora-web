import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [fName, setFname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  /**
   * async funcrion() {..}
   * const gg = async()=>{..}
   */
  async function Req() {
    try {
      await axios({
        method: "post",
        url: "https://dev-api.pass-tickets.com/v1/en/auth/signup",
        data: {
          name: fName,
          email: email,
          password: password,
          phone: phone,
          callingCode: "966",
        },
      }).then((data) => console.log(JSON.stringify(data)));
    } catch (error) {
      console.log("error");
    //   setError(error.response.data);
      setError(error.response.data.message);

    }
  }
  return (
    <div className="form">
      <header>
        <a className="title">Sign up Form</a>
      </header>

      <div className="form-body">
        <div className="username">
          <label className="form__label"> Name </label>
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            value={fName}
            onChange={(nname) => setFname(nname.target.value)}
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            value={email}
            onChange={(eemail) => setemail(eemail.target.value)}
          />
        </div>

        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ppassword) => setPassword(ppassword.target.value)}
          />
        </div>

        <div className="password">
          <label className="form__label">Phobe </label>
          <input
            className="form__input"
            type="phone"
            placeholder="phone Number"
            value={phone}
            onChange={(pphone) => setPhone(pphone.target.value)}
          />
        </div>
      </div>
      <div>
        <a>Do you have an account ?</a>
        <a
          href="https://www.pluralsight.com/guides/inline-styling-with-react"
          className="form__input"
        >
          {" "}
          log in{" "}
        </a>
      </div>
      <div class="footer">
        <button type="submit" class="btn" onClick={Req}>
          Register
        </button>
      </div>
      <div className="error">{error}</div>

    </div>
  );
}

export default App;
