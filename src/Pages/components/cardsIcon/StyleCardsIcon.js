import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  height: 30vh;
  margin-top: 3em;
  text-align: center;
  justify-content: space-evenly;
  border: solid white;
  padding: 1em;
`

export const CardsIcon = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 100%;
`