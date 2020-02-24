// formAndSubmitButton.test.js
import React from "react"
import { FormAndSubmitButton } from "./FormAndSubmitButton.component"
import axiosMock from 'axios'
import { render, getByText } from "@testing-library/react"

jest.mock('axios')

it("FormAndSubmitButton renders correctly", () => {
    const formAndSubmitBtn = render(
      <FormAndSubmitButton
        addTodo={axiosMock.get()}
      />
    )
  expect(formAndSubmitBtn).toMatchSnapshot()
})

it("When the Submit Button is clicked, onclick function is triggered", () => {
    const { getByText } = render(
      <FormAndSubmitButton
        addTodo={axiosMock.get()}
      />
    )
  expect(getByText("Submit")).toBeTruthy()
})