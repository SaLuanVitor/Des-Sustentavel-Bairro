import React from "react";
import { CardsBox } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StylePag04"

export default function Pag04() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.Card>
          <CardsBox />
        </S.Card>
      </S.Box>
    </>
  )
}