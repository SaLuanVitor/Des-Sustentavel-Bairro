import styled from "styled-components";

export const Box = styled.div`
  background-color: #c8c3f8;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 1em;
`
export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: white;
`

export const CardsHeader = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  height: 15em;
  width: 100%;
  align-items: center;
  border: solid black;
  padding: 1em;
  img{
    width: 5em;
    margin: 1em 0;
  }

  @media only screen and (max-width: 693px){
    height: 25em;
    padding: 0;
    h2{
      font-size: 0.8rem;
    }
  }
`
export const Ul = styled.ul`
  display: flex;
  text-align: left;
  justify-content: center;
  width: 80%;
  margin: 1em auto;
  li{
    margin-bottom: 1em;
  }
`