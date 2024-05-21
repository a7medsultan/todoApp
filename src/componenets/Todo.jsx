import Form from "./Form";
import List from "./List";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
}
