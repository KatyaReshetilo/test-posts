import React from "react";
import s from "./postItem.module.css";
export default function PostItem({ title, body }) {
  return (
    <>
      <h3 className={s.header}>{title}</h3>
      <p className={s.content}>{body}</p>
    </>
  );
}
