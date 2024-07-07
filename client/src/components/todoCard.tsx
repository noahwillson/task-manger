import { useState } from "react";
import { useTodoIds } from "../lib/queries";
import { HoverEffect } from "./ui/card";

export default function TodoCard() {
  const [data, setData] = useState([]);
  const todosIdsQuery = useTodoIds();

  if (todosIdsQuery.isPending) {
    return <span>loading👌</span>;
  }

  if (todosIdsQuery.isError) {
    return <span>there is an error~</span>;
  }

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/api/todos");

    const data = await res.json();

    return setData(data);
  };

  fetchData();

  return (
    <div className="w-full mx-auto px-8 text-black bg-white ">
      <p>query data status: {todosIdsQuery.status}</p>
      <HoverEffect items={data} />
      {data.map((todo) => (
        <div className="text-lg" key={todo.id}>
          {todo.title}
          {todo.done ? <span>Done 👌</span> : <span>In Progress..</span>}
          <div>{todo.content}</div>
        </div>
      ))}
    </div>
  );
}
