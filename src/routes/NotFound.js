import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      You look lost.
      <Link to="/">Go home</Link>
    </div>
  );
}
