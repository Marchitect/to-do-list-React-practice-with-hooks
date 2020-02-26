// formAndSubmitButton.test.js
import React from "react"
import { FormAndSubmitButton } from "./FormAndSubmitButton.component"
import axiosMock from "axios"
import Adapter from "enzyme-adapter-react-16"
import { configure, mount, shallow } from "enzyme"
import { render, fireEvent } from "@testing-library/react"

jest.mock("axios")

test("FormAndSubmitButton renders correctly", () => {
  const formAndSubmitBtn = render(
    <FormAndSubmitButton addTodo={axiosMock.get()} />
  )
  expect(formAndSubmitBtn).toMatchSnapshot()
})

test("When the Submit Button is clicked, onClick function is triggered", () => {
  const { getByText } = render(
    <FormAndSubmitButton addTodo={axiosMock.get()} />
  )
  expect(getByText("Submit")).toBeTruthy()
  fireEvent.click(getByText("Submit"))
  expect(axiosMock.get).toHaveBeenCalledTimes(2)
})

configure({ adapter: new Adapter() })

window.alert = jest.fn()

test("When the input area is having different text, onChange function is triggered", () => {
  const setup = () => {
    const utils = render(<FormAndSubmitButton addTodo={axiosMock.get()} />)
    const input = utils.getByPlaceholderText("to-do")
    const submit = utils.getByText("Submit")
    return {
      input,
      submit,
      ...utils
    }
  }

  const { input, submit } = setup()

  const onHandleSubmitMock = jest.fn()
  const props = { onHandleSubmitMock }
  const wrapper = shallow(<FormAndSubmitButton {...props} />)
  const event = { target: { value: "test item" } }
  const todo_input = wrapper.find("#todo_input")
  const button = wrapper.find("#submit")
  todo_input.simulate("change", event)
  button.simulate("click", {
    preventDefault: () => {
    }
   })
  expect(onHandleSubmitMock).toBeCalled()

  fireEvent.change(input, { target: { value: "" } })
  fireEvent.click(submit)
  expect(input.value).toBe("")

  fireEvent.change(input, { target: { value: " test" } })
  fireEvent.click(submit)
  expect(input.value).toBe(" test")

  fireEvent.change(input, { target: { value: ",test" } })
  fireEvent.click(submit)
  expect(input.value).toBe(",test")

  afterAll(() => {
    wrapper.unmount() // unmounts component after all tests have been completed
  })
})
