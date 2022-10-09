import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StylePag05"

export default function Pag05() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(4, 5).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <p>{i.id}</p>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
        </S.CardBox>
      </S.Box>
    </>
  )
}