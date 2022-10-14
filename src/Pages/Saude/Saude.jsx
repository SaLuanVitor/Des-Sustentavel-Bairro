import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StyleSaude"



export default function Saude() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(1, 2).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
          <S.Ul>
            <ul>
              <li>Ampliar o sistema público de saúde.</li>
              <li>Democratizar o acesso aos serviços de saúde mental e física.</li>
              <li>Incentivo a públicidade preventiva sobre saúde sexual.</li>
            </ul>
          </S.Ul>
        </S.CardBox>
      </S.Box>
    </>
  )
}