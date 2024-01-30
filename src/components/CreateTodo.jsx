"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateTodo = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function todoCreate() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content, isdone: "true" }]),
    });
    const data = res.json();
    router.refresh();
  }
  return (
    <div className="space-y-4">
      <input
        className="Border rounded-xl p-4 block "
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="Border rounded-xl p-4 block w-full m-auto"
        onChange={(e) => setContent(e.target.value)}
        name=""
        id="createTodo"
      ></textarea>
      <button
        onClick={todoCreate}
        className="bg-black hover:bg-green-500 text-white rounded-xl p-2 w-full"
      >
        Add Todo!
      </button>
    </div>
  );
};
