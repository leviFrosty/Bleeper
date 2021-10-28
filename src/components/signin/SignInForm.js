import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "fbInstance";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAcccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAcccount) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const stringedUserCred = JSON.stringify(user);
          window.localStorage.setItem("userCredential", stringedUserCred);

          history.push("/new-user");
          console.log("going to new user page");
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        setError(error);
      });
    }
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleNewAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <div className="signin-form__container">
      <form className="signin-form" onSubmit={onSubmit}>
        <div className="input__container">
          <label htmlFor="email" className="requiredinput">
            Email
          </label>
          <input
            autoComplete="username"
            name="email"
            className="input"
            required
            placeholder="user@domain.tld"
            type="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="input__container">
          <label htmlFor="password" className="requiredinput">
            Password
          </label>
          <input
            autoComplete="current-password"
            name="password"
            className="input"
            minLength={8}
            required
            placeholder="Min. 8 characters"
            type="password"
            value={password}
            onChange={onChange}
          />
          {error ? (
            <div className="input-error">
              <p>{error.message}</p>
            </div>
          ) : (
            <p></p>
          )}
          <input
            className="input-submit"
            type="submit"
            value={newAcccount ? "Create account" : "Login"}
          />
        </div>
      </form>

      <div className="not-registered">
        {newAcccount ? (
          <div className="not-registered__question">
            <span>Already Have an Account?</span>
            <button onClick={toggleNewAccount}>Login</button>
          </div>
        ) : (
          <div className="not-registered__question">
            <span>Not Registered Yet?</span>
            <button onClick={toggleNewAccount}>Create an Account</button>
          </div>
        )}
      </div>
    </div>
  );
}
