import React from "react";
import { useRouter } from "next/navigation";

const Todo = ({ item }) => {
  const router = useRouter();
  async function TodoDelete() {

    const url_delete = "https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk";
    const res = await fetch(url_delete, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    const data = res.json();
    router.refresh();
  }
  return (
    <div
      key={item._id}
      className="m-3 p-[5px] bg-yellow-400 flex items-center rounded-xl justify-between"
    >
      {" "}
      {item.title},{item.content}{" "}
      <button onClick={TodoDelete} className="bg-red-600 p-1 rounded-xl">
        delete
      </button>
    </div>
  );
};

export default Todo;
