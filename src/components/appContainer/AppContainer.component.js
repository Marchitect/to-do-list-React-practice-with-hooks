import React, { useState } from "react"
import { FormAndSubmitButton } from "../formAndSubmitButton"
import { TodoItem } from "../todoItem"
import { FlexContainer } from "./AppContainer.style"

export function AppContainer() {
  // state hook returns the current state and the function which updates the state
  const [todos, setTodos] = useState([
    { text: "Learn React state hook" },
    { text: "Meet friends for lunch" },
    { text: "Learn React effect hook" },
    { text: "Buy groceries" }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text: text }]
    setTodos(newTodos)
  }

  const makeTodoComplete = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <FlexContainer>
      <FormAndSubmitButton addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          makeTodoComplete={makeTodoComplete}
        />
      ))}
    </FlexContainer>
  )
}
