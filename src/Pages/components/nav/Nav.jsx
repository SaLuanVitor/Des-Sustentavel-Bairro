import React from "react";
import CardsIcon from "../cardsIcon/CardsIcon.jsx";
import Home from "../../../Assets/casa.png"
import * as S from "./StyleNav.js"
export default function Nav() {

  return (
    <S.Box>
      <h1>Os objetivos de desenvolvimento sustentável no bairro <strong>Nossa Senhora de Fátima</strong></h1>
      <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possam antingir a Agenda 2030 no Brasil</p>
      <S.ImgLink to="/"><img src={Home} alt="Home" /></S.ImgLink>
      <CardsIcon />
    </S.Box>

  )
}