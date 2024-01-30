
import react from "react";
import { TodoList } from "../components/TodoList";
import { CreateTodo } from "../components/CreateTodo";
export const dynamic = "force-dynamic";


async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk")
  const data = await res.json();
  return data;
}
export default async function Home() {
  const { data } = await getData();
  return (
    <main className="p-16 space-y-16">
      <CreateTodo />
      <TodoList data={data}/>

    </main >
  )
}
