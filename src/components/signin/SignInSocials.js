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
      <button name="google" onClick={onSocialSignin}>
        Sign in with Google
      </button>
      <button name="github" onClick={onSocialSignin}>
        Sign in with GitHub
      </button>
    </div>
  );
}
