import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2em;
  margin-top: 2em;
  color: white;
  background-color: #c8c3f8;
  h1{
    width: 55%;
    margin-bottom: 1em;
  }
  p{
    width: 70%;
  }
  @media only screen and (max-width: 472px){
    margin-top: 6em;
  }
`
export const ImgLink = styled(Link)`
  img{
    width: 32px;
  }
  position: relative;
  top: 3em;
  @media only screen and (max-width: 472px){
    display: none;
  }
`
