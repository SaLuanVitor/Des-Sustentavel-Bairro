import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StylePaz"

export default function Paz() {

  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(4, 5).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
          <S.Ul>
            <ul>
              <li>Acabar com abuso, exploração, tráfico e todas as formas de violência e tortura contra jovens e crianças.</li>
              <li>Proporcionar acesso à justiça na comunidade.</li>
              <li>Fortalecer a assistência social. </li>
            </ul>
          </S.Ul>
        </S.CardBox>
      </S.Box>
    </>
  )
}