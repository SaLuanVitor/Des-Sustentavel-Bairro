import styled from "styled-components";
import { Link } from "react-router-dom";


export const Figure = styled.figure`
  display: none;
  @media only screen and (max-width: 472px){
    display: flex;
    top: 0em;
    right: 5%;
    left: 5%;
    position: fixed;
    background-color: #c8c3f8;
    border: solid black;
    padding: 1em;
    width: 90%;
    justify-content: space-between;
    button{
      width: 50px;
      height: 50px;
      border: none;
      background-color: rgba(0,0,0,0);
    }
    img{
      width: 50px;
      height: 50px;
      background-color: rgba(0,0,0,0);
    }
  }
`

export const CardsIcon = styled.div`
  background-color: ${props => props.color};
  display: flex;
  width: 90%;
  margin-left: 1em;
  margin-top: 1em;
  padding: 0.8em;
  justify-content: space-evenly;
  p{
    border: solid red;
    width: 10%;
  }
  h2{
    font-size: 1rem;
    border: solid blue;
  }
  img{
    border: solid yellow;
  }
`
export const Box = styled.div`
  position: fixed;
  top: 6em;
  padding: 1em;
  border: solid black;
  width: 90%;
  left: 5%;
  background-color: #c8c3f8;
`


export const ImgLink = styled(Link)`
  

`