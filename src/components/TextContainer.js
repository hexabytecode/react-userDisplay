import React from "react";

export default function TextContainer({
  userData: { email, first_name, last_name },
}) {
  if (!email || !first_name || !last_name) {
    return <p>No user available</p>;
  }
  return (
    <ul>
      <li>Email: {email}</li>
      <li>Name: {`${first_name} ${last_name}`}</li>
    </ul>
  );
}
