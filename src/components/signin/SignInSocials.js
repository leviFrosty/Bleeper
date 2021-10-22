import React from "react";
import {
  signInWithPopup,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "fbInstance";

export default function SignInSocials() {
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

  return (
    <div className="sigin-thirdParties">
      <div className="signin__button__container">
        <button
          className="signin__button"
          name="google"
          onClick={onSocialSignin}
        >
          <i className="fab fa-google"></i>Sign in with Google
        </button>
      </div>
      <div className="signin__button__container">
        <button
          className="signin__button"
          name="github"
          onClick={onSocialSignin}
        >
          <i className="fab fa-github"></i>Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
