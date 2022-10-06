import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  height: 100%;
  margin-top: em;
  text-align: center;
  justify-content: space-evenly;
  background-color: white;
`

export const CardsBox = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
`