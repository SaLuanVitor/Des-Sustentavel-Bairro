import React from "react";
import { CardsBox } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StylePag05"

export default function Pag05() {

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