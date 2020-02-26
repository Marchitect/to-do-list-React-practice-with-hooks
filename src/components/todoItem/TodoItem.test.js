// TodoItem.test.js
import React from "react"
import { TodoItem } from "./TodoItem.component"
import axiosMock from 'axios'
import { fireEvent, render, getByText } from "@testing-library/react"

jest.mock('axios')

test("TodoItem renders correctly when it is not completed", () => {
  let index = 1
  let todo = { text: "test", completed: false }
  let makeTodoComplete = () => {}
  const todoItem = render(
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        makeTodoComplete={makeTodoComplete}
      >
      </TodoItem>
    )
  expect(todoItem).toMatchSnapshot()
})

test("TodoItem renders correctly when it is completed", () => {
  let index = 1
  let todo = { text: "test", completed: true }
  let makeTodoComplete = () => {}
  const todoItem = render(
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        makeTodoComplete={makeTodoComplete}
      >
      </TodoItem>
    )
  expect(todoItem).toMatchSnapshot()
})

test("When the Complete button is clicked, the click event function is called once", () => {
  let index = 1
  let todo = { text: "test", completed: false }
  const { getByText } = render(
    <TodoItem
      key={index}
      index={index}
      todo={todo}
      makeTodoComplete={axiosMock.get}
    >
    </TodoItem>
  )

  expect(getByText("test")).toBeTruthy()
  fireEvent.click(getByText("Complete"))
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
})
