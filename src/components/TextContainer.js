import React from "react";

export default function TextContainer({ userData }) {
  return (
    <ul>
      <li>Email: {userData.email || ""}</li>
      <li>
        Name: {`${userData.first_name || ""} ${userData.last_name || ""}`}
      </li>
    </ul>
  );
}
