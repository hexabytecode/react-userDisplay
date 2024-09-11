import React from "react";

export default function ImgComponent({ userData }) {
  return userData.avatar ? <img src={userData.avatar}></img> : null;
}
