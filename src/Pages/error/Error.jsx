import React from "react";
import Home from "../../Assets/casa.png"
import * as S from "./StyleError.js"
export default function Error() {

  return (
    <>
      <S.Box>
        <S.ImgLink to="/"><img src={Home} alt="Home" /></S.ImgLink>
        <h4>Error 404: page not found :(</h4>
      </S.Box>
    </>
  )
}