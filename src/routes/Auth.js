import React, { useState } from "react";
import { auth } from "fbInstance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAcccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAcccount) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const stringedUserCred = JSON.stringify(user);
          window.localStorage.setItem("userCredential", stringedUserCred);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error);
      });
    }
  };

  const onSocialSignin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(auth, provider);
    await getRedirectResult(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleNewAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h1>Please sign in</h1>
      </div>
      <div className="signin">
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
        <div className="sigin-thirdParties">
          <button name="google" onClick={onSocialSignin}>
            Sign in with Google
          </button>
          <button name="github" onClick={onSocialSignin}>
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
