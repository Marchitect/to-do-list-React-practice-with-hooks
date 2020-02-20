import React, { useState } from 'react'
import { Button, Label, Input, Form, OneRow } from './FormAndSubmitButton.style'

// you need the square brackets here for addTodo to make sure it is passed on as a function
export function FormAndSubmitButton({addTodo}){
	const [value, setValue] = useState("")
	const handleSubmit = e => {
		e.preventDefault()
		if (!value) return
		addTodo(value)
		// clear the input after a new to-do item is added
		setValue("")
	}
	return <div>
		<Form>
			<Label htmlFor = 'todo-item-input'>Enter your to-do item here:</Label>
			<OneRow>
				<Input
					type = "text"
					name = 'todo-item-input'
					value = {value}
					onChange ={e => setValue(e.target.value)}
				/>
				<Button onClick={handleSubmit}>Submit</Button>
			</OneRow>
		</Form>
		
	</div>
}