"use client";

import react from "react";
export const dynamic = "force-dynamic";

export const TodoList = async ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        <div>
          {" "}
          {item.title},{item.content}{" "}
        </div>;
      })}
    </div>
  );
};
