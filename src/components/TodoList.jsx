"use client";

import react from "react";
import Todo from "./Todo";
export const dynamic = "force-dynamic";

export const TodoList = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <Todo key={item._id} item={item} />;
      })}
    </div>
  );
};
