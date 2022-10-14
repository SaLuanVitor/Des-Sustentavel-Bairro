import styled from "styled-components";
import { Link } from "react-router-dom";


export const Figure = styled.figure`
  display: none;
  @media only screen and (max-width: 472px){
    display: flex;
    top: 0em;
    right: 2.5%;
    left: 2.5%;
    position: fixed;
    background-color: #c8c3f8;
    border: solid black;
    padding: 1em;
    width: 95%;
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
  width: 95%;
  margin-left: 1em;
  margin-top: 1em;
  padding: 0.5em;
  justify-content: space-evenly;
  height: 4em;
  align-items: center;
  h2{
    font-size: 1rem;
    width: 50%;
    color: black;
  }
  img{
    width: 2em;
    height: 2em;
    margin: 1em 0;
  }
`
export const Box = styled.div`
  position: fixed;
  top: 6em;
  padding: 0.5em;
  border: solid black;
  width: 95%;
  left: 2.5%;
  background-color: #c8c3f8;
`


export const ImgLink = styled(Link)`
  text-decoration: none;
`