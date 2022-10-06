import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  height: 100%;
  margin-top: 3em;
  text-align: center;
  justify-content: space-evenly;
  border: solid white;
  flex-wrap: wrap;
  padding: 1em;
`

export const CardsIcon = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 130px;
  margin-left: 1em;
  margin-top: 1em;
  border-radius: 0.5em;
`
