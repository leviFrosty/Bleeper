import React from "react";
import { useState } from "react/cjs/react.development";
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
    <div className="signin-form">
      <form onSubmit={onSubmit}>
        <input
          name="email"
          className="input"
          required
          placeholder="email"
          type="email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          className="input"
          required
          placeholder="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAcccount ? "Create account" : "Sign in"}
        />
        {error ? <div>{error.message}</div> : null}
      </form>
      <button onClick={toggleNewAccount}>
        {newAcccount ? "Sign in?" : "Create account"}
      </button>
    </div>
  );
}
