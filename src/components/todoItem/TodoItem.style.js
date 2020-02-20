// TodoItem.style.js
import styled from 'styled-components'

export const Item = styled.div`
	display: block;
	float: left;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 1px solid #000;
	background: #fff;
	transition: 200ms all ease-in;
	:hover {
		/* background: #33B2FF;
		cursor: pointer; */
	}	
`

export const DeleteButton = styled.button`
	display: block;
	float: right;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 1px solid #000;
	background: #fff;
	transition: 200ms all ease-in;
	:hover {
		background: #33B2FF;
		cursor: pointer;
	}
`

export const ItemContainer = styled.div`
	padding: 5px;
	background: #ccc;
	margin: 5px auto;
	border-radius: 5px;
`