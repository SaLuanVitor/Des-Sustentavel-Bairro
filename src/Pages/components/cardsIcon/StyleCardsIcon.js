import styled from "styled-components";
import { Link } from "react-router-dom";
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
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const CardsIcon = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 130px;
  margin-left: 1em;
  margin-top: 1em;
  border-radius: 0.5em;
  align-items: center;
  justify-content: space-evenly;
  width: 10em;
  height: 10em;
  h2{
    font-size: 0.9rem;
    color: black;
    width: 80%;
    flex-wrap: wrap;
  }
  img{
    width: 48px;
  }
`
