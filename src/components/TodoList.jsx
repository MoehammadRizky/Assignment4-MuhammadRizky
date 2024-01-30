"use client";

import react from "react";
export const dynamic = "force-dynamic";

export const TodoList = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item._id}>
            
            {" "}
            {item.title},{item.content}{" "}
          </div>
        );
      })}
    </div>
  );
};
