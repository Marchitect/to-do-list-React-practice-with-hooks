import React from 'react'
import { Item, DeleteButton, ItemContainer } from './TodoItem.style'

export function TodoItem({ todo, index, makeTodoComplete }) {
	return <ItemContainer><Item>{todo.text}</Item><DeleteButton onClick={()=>makeTodoComplete(index)}>Complete</DeleteButton></ItemContainer>
}