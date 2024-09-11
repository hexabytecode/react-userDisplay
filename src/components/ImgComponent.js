import React from "react";

export default function ImgComponent({ userData: { avatar } }) {
  return avatar ? <img src={avatar}></img> : null;
}
