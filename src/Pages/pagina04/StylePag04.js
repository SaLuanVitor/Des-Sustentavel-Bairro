import styled from "styled-components";

export const Box = styled.div`
  background-color: #c8c3f8;
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding-bottom: 1em;
`
export const CardBox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  justify-content: space-evenly;
  background-color: white;
`

export const CardsHeader = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  border: solid black;
`