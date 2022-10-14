import React from "react";
import { Cards } from "../components/cardsBox/CardsBox";
import Nav from "../components/nav/Nav";
import * as S from "./StyleTrabalho"

export default function Trabalho() {
  return (
    <>
      <Nav />
      <S.Box>
        <S.CardBox>
          {Cards.slice(0, 1).map((i) => (
            <S.CardsHeader color={i.color} key={i.id}>
              <img src={i.img} alt={i.alt} />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </S.CardsHeader>
          ))}
          <S.Ul>
            <ul>
              <li>Os moradores do bairro Nossa Senhora de Fátima devem ter acesso a oportunidades de emprego digno. </li>
              <li>A cidade deve promover programas de incentivo ao empreendedorismo local.</li>
              <li>A cidade deve destinar recursos para a distribuição de renda para as famílias mais carentes.</li>
              <li>Desenvolvimento educacional para os jovens visando em inserção no mercado de trabalho.</li>
            </ul>
          </S.Ul>
        </S.CardBox>
      </S.Box>
    </>
  )
}