import React from "react";
import * as S from "./StyleCardsBox.js"

export function CardsBox() {
  const Cards =
    [
      {
        id: 1,
        img: 'Imagem',
        alt: 'Descrição',
        title: 'Titulo',
        text: 'Texto Resumo',
        link: "/Pag01"
      },
      {
        id: 2,
        img: 'Imagem',
        alt: 'Descrição',
        title: 'Titulo',
        text: 'Texto Resumo',
        link: "/Pag02"
      },
      {
        id: 3,
        img: 'Imagem',
        alt: 'Descrição',
        title: 'Titulo',
        text: 'Texto Resumo',
        link: "/Pag03"
      },
      {
        id: 4,
        img: 'Imagem',
        alt: 'Descrição',
        title: 'Titulo',
        text: 'Texto Resumo',
        link: "/Pag04"
      },
      {
        id: 5,
        img: 'Imagem',
        alt: 'Descrição',
        title: 'Titulo',
        text: 'Texto Resumo',
        link: "/Pag05"
      },
    ]
  return (
    <>
      <S.CardBox>
        {Cards.slice().map((i) => (
          <S.CardsBox key={i.id}>
            <p>{i.id}</p>
            <img src={i.img} alt={i.alt} />
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </S.CardsBox>
        ))}
      </S.CardBox>
    </>
  )
}