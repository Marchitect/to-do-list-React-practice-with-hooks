import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Label, Input, Form, OneRow } from "./FormAndSubmitButton.style"

// you need the square brackets here for addTodo to make sure it is passed on as a function
export function FormAndSubmitButton({ addTodo }) {
  const [value, setValue] = useState("")
  // whitelist numbers and letters, excluding or disallowing special characters
  const validRegex = RegExp("^[a-zA-Z0-9 ]*$")
  const handleSubmit = e => {
    e.preventDefault()
    if (!value || value === "") {
      alert("To-do item input cannot be empty")
    } else if (value.charAt(0) === " ") {
      alert("No space allowed at the beginning of a to-do item input")
    } else if (!validRegex.test(value)) {
      alert("No special characters allowed")
    } else {
      addTodo(value)
      // clear the input after a new to-do item is added
      setValue("")
    }
  }
  return (
    <div>
      <Form>
        <Label htmlFor="todo-item-input">Enter your to-do item here:</Label>
        <OneRow>
          <Input
            type="text"
            name="todo-item-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="to-do"
            id="todo_input"
          />
          <Button id="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </OneRow>
      </Form>
    </div>
  )
}

FormAndSubmitButton.propTypes = {
  addTodo: PropTypes.func.isRequired
}
