import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StyleEducacao"

export default function Educacao() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(2, 3).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
          <S.Ul>
            <ul>
              <li>Incentivo a educação pública, inclusive de qualidade.</li>
              <li>Incentivo a atividades educativas extracurriculares.</li>
              <li>Permanência estudantil pensando principalmente em grupos minoritários e marginalizados.</li>
            </ul>
          </S.Ul>
        </S.CardBox>
      </S.Box>
    </>
  )
}