import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Todo = ({ item }) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  //   update start here
  async function TodoUpdate() {
    const res = fetch("https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: item._id, title, content, isdone: "" }),
    });
    router.refresh();
    setEditMode(false);
  }
  // update ends here

  //   delete start here
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
  // delete ends here

  if (editMode) {
    return (
      <div className="space-y-4">
        <input
          value={title}
          className="Border rounded-xl p-4 block "
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          placeholder="Content"
          className="Border rounded-xl p-4 block w-full m-auto"
          onChange={(e) => setContent(e.target.value)}
          name=""
          id="createTodo"
        ></textarea>
        <button
          onClick={TodoUpdate}
          className="bg-black hover:bg-green-500 text-white rounded-xl p-2 w-full"
        >
          Update todo!{" "}
        </button>
      </div>
    );
  }
  return (
    <div
      key={item._id}
      className="m-3 p-[5px] bg-yellow-400 flex items-center rounded-xl justify-between "
    >
      {" "}
      {item.title},{item.content}{" "}
      <div className="space-x-4">
        <button
          onClick={() => {
            setEditMode(true);
          }}
          className="bg-blue-600 p-1 rounded-xl"
        >
          update
        </button>
        <button onClick={TodoDelete} className="bg-red-600 p-1 rounded-xl">
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
