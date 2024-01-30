import react from "react";
import { TodoList } from "../components/todolist/component/TodoList";
import { CreateTodo } from "../components/todolist/component/CreateTodo";


async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk")
  const data = await res.json();
  return data;
}

// async function GetTodo() {
//   const res = await fetch("https://v1.appbackend.io/v1/rows/5KjDZS2nXpFk");
//   const Todos = res.json();

//   return Todos;
// }


export default async function Home() {
  const { data } = await getData();
  // console.log(data);
  return (
    <main className="p-16 space-y-16">
      {/* <div>
        {data.map((item) => {
          <div>
            {" "}
            {item.title},{item.content}{" "}
          </div>;
        })}
      </div> */}

      <CreateTodo />
       <TodoList data={data} />

    </main>
  )
}
