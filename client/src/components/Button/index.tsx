import styled from 'styled-components'
import {FC} from 'react'
const ButtonField = styled.button`
  width:90%;
height: 46px;
padding: 0px, 27px, 11px, 0px;
border-radius: 8px;
gap: 8px;
background-color: var(--button-color);
border: none;
outline: none;
font-family: Instrument Sans;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
color: var(--white-color);
cursor: pointer;
&:hover{
  background-color: var(--buttton-active);
}

`
interface ButtonProps{
text: string;
}

export const Button:FC<ButtonProps> = ({text}) => {
  return (
    
      <ButtonField type="submit">
      {text}
      </ButtonField>
   
  )
}
