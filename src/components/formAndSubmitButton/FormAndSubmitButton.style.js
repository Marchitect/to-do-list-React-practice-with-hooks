// FormAndSubmitButton.style.js
import styled from 'styled-components'

export const OneRow = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`
export const Input = styled.input`
	font-size: 1em;
  border: 3px solid #000;
  border-right: 0px;
`

export const Button = styled.button`
	/* submit button */
	padding: 2px 10px;
	background: #000;
	color: #fff;
	font-size: 1em;
	border: 2px solid #000;
	border-radius: 0;
	transition: 200ms all ease-in;
	&:hover{
		color: #000;
		background: #33B2FF;
		cursor: pointer;
	}
`

export const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	height: 100px;
`

export const Label = styled.label`
	font-weight: bold;
	font-size: 1.5em;
	width: 100%;
`