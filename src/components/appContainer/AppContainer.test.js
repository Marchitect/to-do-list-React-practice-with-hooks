// AppContainer.test.js
import React from "react"
import { AppContainer } from "./AppContainer.component"
import { render, fireEvent } from "@testing-library/react"

test("AppContainer renders correctly", () => {
  const appContainer = render(<AppContainer />)
  expect(appContainer).toMatchSnapshot()
})

test("When the Submit Button is clicked, the new to-do item is added", () => {
  const { getByText, getByPlaceholderText } = render(
    <AppContainer />
  )
  expect(getByText("Submit")).toBeTruthy()
  const input = getByPlaceholderText("to-do")
  fireEvent.change(input, { target: { value: "test item" } })
  fireEvent.click(getByText("Submit"))
})

test("When the Complete Button is clicked, the select to-do item is removed", () => {
  const { getAllByText } = render(<AppContainer />)
  expect(getAllByText("Complete")[0]).toBeTruthy()
  fireEvent.click(getAllByText("Complete")[0])
})
