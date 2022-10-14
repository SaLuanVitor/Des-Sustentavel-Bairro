import styled from "styled-components";
import { Link } from "react-router-dom"
export const Box = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  padding-top: 4em;
  background-color: #c8c3f8;
  h4{
    text-align: center;
    padding-top: 2em;
  }
`
export const ImgLink = styled(Link)`
  img{
    width: 32px;
  }
  margin: 0 auto;
  @media only screen and (max-width: 472px){
    display: none;
  }
`