import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StyleUrbanizacao"

export default function Urbanizacao() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(3, 4).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
          <S.Ul>
            <ul>
              <li>Proporcionar acessibilidade urbana.</li>
              <li>Garantir o acesso de todos à habitação segura, adequada e a preço acessível, e aos serviços básicos e urbanizar as favelas.</li>
              <li>Garantir a proteção animal urbana.</li>
            </ul>
          </S.Ul>
        </S.CardBox>
      </S.Box>
    </>
  )
}