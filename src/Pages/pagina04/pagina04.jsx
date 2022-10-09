import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StylePag04"

export default function Pag04() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(3, 4).map((i) => (
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