import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  color: white;
  background-color: #c8c3f8;
  h1{
    width: 55%;
    margin-bottom: 1em;
  }
  p{
    width: 70%;
  }
`
export const ImgLink = styled(Link)`
  position: relative;
  top: 3em;
  img{
    width: 32px;
  }
`