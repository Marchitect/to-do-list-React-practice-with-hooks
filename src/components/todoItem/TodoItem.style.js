// TodoItem.style.js
import styled from "styled-components";

export const Item = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  background: #fff;
  transition: 200ms all ease-in;
`;

export const DeleteButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #000;
  background: #fff;
  transition: 200ms all ease-in;
  :hover {
    background: #33b2ff;
    cursor: pointer;
  }
`;

export const ItemContainer = styled.div`
  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 40%;
  }
  @media only screen and (min-width: 1441px) {
    width: 30%;
  }
  padding: 5px;
  background: #9fcde7;
  margin: 5px auto;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5x;
`;
